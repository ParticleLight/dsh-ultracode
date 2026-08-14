# dsh-ultracode

UltraCode agent preset for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) — a working mode, not just an effort level.

UltraCode is on. The preset gives every session using it:

1. **Think at maximum depth** before acting — analyze, weigh alternatives, then act decisively.
2. **Plan → execute → verify** — break work into a plan, carry it out in verifiable steps, then prove it runs (tests, diff review, acceptance criteria) before claiming success.
3. **Fan out in parallel** — delegate independent work to subagents or run workflows instead of doing it serially; you orchestrate and verify, workers execute.
4. **Write long, complete answers** — full implementations, not sketches.
5. **Finish with proof** — state what was verified and how.

The preset is based on the `code` (PTC) preset: full tool catalog, Code Mode SDK presentation, plan mode, compaction, goals, subagents, workflows, and Ralph — with the UltraCode working-mode guide added to the persona.

## Install

```sh
dsh plugin --profile web add github:<OWNER>/dsh-ultracode
```

Restart `dsh web`. The first boot installs the preset into `$DSH_HOME/.agent-presets/ultracode` (idempotent — your edits are never overwritten).

## Use

New sessions default to the `UltraCode 模式` preset once you select it (or set it as default in Settings → Agent presets). For the full experience, also pick the highest reasoning effort (`max` or `ultracode` where available) in the model picker — the mode drives the workflow, the effort drives the depth.

---

# dsh-ultracode（中文）

[DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 的 UltraCode Agent 预设——是一种**工作模式**，而不只是一个思考档位。

开启 UltraCode 后，会话遵循：

1. **行动前最大深度思考**——分析问题、权衡方案，再果断行动。
2. **计划 → 执行 → 验证**——拆解为可验证的步骤，跑测试、复查 diff、对照验收标准，证明它真的能跑，而不是"写完了"。
3. **并行子代理编排**——独立的工作分派给 subagent / workflow 并行执行，你来编排与验收。
4. **完整输出**——完整实现，不写草稿式答案。
5. **以证据收尾**——说明验证了什么、怎么验证的。

预设基于 `code`（PTC）模式：完整工具集、Code Mode SDK 呈现、计划模式、压缩、目标、子代理、工作流与 Ralph——只是在 persona 中加入了 UltraCode 工作模式引导。

## 安装

```sh
dsh plugin --profile web add github:<OWNER>/dsh-ultracode
```

重启 `dsh web`。首次启动会把预设安装到 `$DSH_HOME/.agent-presets/ultracode`（幂等——不会覆盖你的修改）。

## 使用

新会话在 Settings → 模式中选择 `UltraCode 模式`（或设为默认）。完整体验：在模型选择器里同时把推理档位调到最高（`max` 或可用的 `ultracode`）——模式决定工作方式，档位决定思考深度。

## License

MIT
