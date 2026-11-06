import { WorkflowPractice, ToolGroup } from '../types';

export const workflowIntro =
  "I build with Claude Code as a daily driver, and most of the work is in the setup around it. An agent is only as good as the context it is handed, so I treat that context as code: written down, version controlled, and corrected when it turns out to be wrong.";

export const practices: WorkflowPractice[] = [
  {
    title: "A written contract, not ad-hoc prompts",
    detail:
      "Every project gets a CLAUDE.md that is deliberately short, 66 lines on my current one, because it loads into every session and every line is paid for on every task. It is a table of contents into a suite of 11 documents and about 5,000 lines covering architecture, game rules, deployment, and platform constraints. Non-negotiables are stated with the reasoning behind them, so the rule survives the person who wrote it.",
    evidence: "66-line index into 11 docs, ~5,000 lines"
  },
  {
    title: "Custom skills for anything done twice",
    detail:
      "Repeat work becomes a skill: a folder with instructions and a script. My production metrics skill is a 438-line instruction file plus a 549-line Python tool that pulls live funnel and retention counters with deltas against the previous run. Most of that instruction file is not how to run it, it is how the output has misled me before, written down the day it happened.",
    evidence: "438-line skill + 549-line tool"
  },
  {
    title: "A decision log the code cannot regenerate",
    detail:
      "Numbers can be re-pulled from production forever. The reasoning that turned them into a decision exists once. So every measurement session appends an entry under four fixed headings: what was measured, what was inferred, what this corrects from earlier entries, and what is still open. 29 entries so far, and the correction heading is the one that earns its keep.",
    evidence: "29 dated entries, ~174KB"
  },
  {
    title: "Pre-registered falsifiers",
    detail:
      "Before shipping a change I write down what result would prove it wrong, with a threshold and an effect size, and commit that alongside the code. It has fired twice. Both times the change came back out. Writing the falsifier first is the difference between a decision and a story told afterwards about the numbers that arrived.",
    evidence: "fired twice, reverted twice"
  },
  {
    title: "Verification over assertion",
    detail:
      "An agent saying something works is not evidence. Claims get checked: unit tests for logic, headless browser drives against a running server for wiring, automated layout audits across eight viewports for anything visual, and a read of the deployed bytes after a release. Code the test harness cannot import has never actually run, and I treat it that way.",
    evidence: "250 tests, 16 suites"
  },
  {
    title: "Memory that carries between sessions",
    detail:
      "Corrections that would otherwise be relearned go into a persistent memory directory: one fact per file, with why it matters and how to apply it. Style preferences, security constraints, and the failure modes a project keeps repeating. It means the second session starts where the first one finished rather than at the beginning.",
    evidence: "one fact per file, indexed"
  }
];

export const toolGroups: ToolGroup[] = [
  {
    name: "Agent",
    items: [
      "Claude Code (Opus)",
      "High reasoning effort",
      "Custom Node status line",
      "Stop-event desktop notifications",
      "Persistent project memory"
    ]
  },
  {
    name: "Plugins",
    items: [
      "superpowers",
      "code-review",
      "feature-dev",
      "frontend-design",
      "claude-md-management",
      "typescript-lsp",
      "context7",
      "figma",
      "ralph-loop"
    ]
  },
  {
    name: "Skills",
    items: [
      "check-metrics (custom)",
      "graphify",
      "impeccable",
      "design-taste-frontend",
      "emil-design-eng",
      "blender",
      "animation-vocabulary"
    ]
  },
  {
    name: "MCP servers",
    items: ["Playwright", "Figma", "Context7", "Higgsfield"]
  }
];
