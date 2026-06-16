# Unit 1 Study Guide: Introduction to Agents & Vibe Coding

Welcome to your study guide for Unit 1 of the Kaggle & Google 5-Day AI Agents Intensive. This document compiles the core concepts from "The New SDLC with Vibe Coding" whitepaper and the summary podcast episode.

---

## 1. Key Terminology

### Vibe Coding
A paradigm shift in software development where **natural language** becomes the primary programming interface.
- **The Shift:** Instead of writing syntax line-by-line manually, developers describe their intent to AI models (like Gemini), which generate, edit, compile, and run the code.
- **Why it matters:** It shifts the developer's focus from "writing code" to "designing features and architecture."

### Agentic Engineering & The "Factory Model"
While vibe coding is fast, deploying enterprise-grade software requires **agentic engineering** to maintain quality and security.
- **The Factory Model:** A mental model where the human developer acts as the **system orchestrator** or **factory manager**.
- **The Harnesses:** Instead of manual coding, developers build the constraints that guide the autonomous AI agents. These include:
  1. **Context Harness:** Providing the agent with the precise subset of codebase files, documentation, and dependencies it needs (using tools like Antigravity's Workspaces or custom Skills).
  2. **Constraint Harness:** Restricting what the agent is allowed to do (e.g., preventing external command executions without approval, or restricting file-system write permissions).
  3. **Evaluation Harness:** Automated tests, linting scripts, and run validations that verify the agent's work automatically before it is marked complete.

---

## 2. The Compressed SDLC (Software Development Life Cycle)

In a traditional SDLC, steps like Planning, Design, Implementation, Testing, Deployment, and Maintenance are separate phases with high friction.

In the **Agentic SDLC**, these phases are compressed into a fast, iterative loop:
1. **Define Intent:** The developer prompts the agent with a goal.
2. **Implementation Plan:** The agent drafts a design/implementation plan (using artifacts) and requests feedback.
3. **Execution & Self-Correction:** The agent writes the code, encounters bugs or linter warnings, runs tests, and fixes its own mistakes autonomously.
4. **Human Review & Deploy:** The human developer reviews the final output (Walkthrough artifact) and triggers deployment to staging or production (e.g., Cloud Run).

---

## 3. Codelab Key Takeaways

### Antigravity 2.0 & IDE
- **Skills:** Specialized packages of instructions, scripts, or assets stored locally in `.agents/skills/` (project-specific) or `~/.gemini/config/skills/` (global). The agent only loads a skill into its context window when the user's prompt matches the skill's description.
- **Artifacts:** Structured documents (Implementation Plans, Task Lists, Walkthroughs) created by the agent to report status and get confirmation without cluttering the chat window.

### AI Studio & Cloud Run
- **AI Studio:** A prototyping environment to test Gemini models and prompt ideas.
- **Cloud Run:** Google Cloud's serverless platform. Deployed apps scale down to zero when not in use, making them highly cost-effective and secure (hiding API keys server-side).
