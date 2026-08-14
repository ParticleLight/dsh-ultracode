// dsh-ultracode — UltraCode agent preset installer.
//
// Installs the UltraCode agent preset into the DSH user preset root
// ($DSH_HOME/.agent-presets/ultracode) on first boot, where the harness
// auto-discovers it as a user-authored preset. The copy is idempotent:
// an existing preset directory is left untouched, so a user's edits are
// never overwritten.
//
// The preset itself (agent.cordis.yml + preset.yml) ships in
// ../agent-presets/ultracode/ of this package.

import { Context } from "@deepseek-ai/cordis";
import { copyFile, mkdir, stat } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { dshHomePath } from "@deepseek-ai/dsh-home-paths";

/** Preset id — the directory name under the user preset root. */
const PRESET_ID = "ultracode";
/** Files that make up the preset, copied verbatim. */
const FILES = ["agent.cordis.yml", "preset.yml"];

/** Absolute path of this package's bundled preset directory. */
const bundledDir = fileURLToPath(new URL("../agent-presets/ultracode/", import.meta.url));

export const name = "dsh-ultracode";

export function apply(ctx) {
	ctx.onReady(async () => {
		const destDir = join(dshHomePath(".agent-presets"), PRESET_ID);
		try {
			// Existing preset wins — never overwrite user edits.
			await stat(join(destDir, "agent.cordis.yml"));
			ctx.logger.info(`dsh-ultracode: preset "${PRESET_ID}" already installed at ${destDir}`);
			return;
		} catch {
			// Not installed yet — fall through to install.
		}
		try {
			await mkdir(destDir, { recursive: true });
			for (const file of FILES) {
				await copyFile(join(bundledDir, file), join(destDir, file));
			}
			ctx.logger.info(`dsh-ultracode: installed UltraCode preset at ${destDir}`);
		} catch (error) {
			ctx.logger.warn(`dsh-ultracode: failed to install preset: ${String(error)}`);
		}
	});
}
