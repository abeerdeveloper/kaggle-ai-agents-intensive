# Unit 4: Vibe Coding Agent Security and Evaluation - Study Guide

This guide summarizes the core concepts from the Unit 4 whitepaper and codelabs of the Kaggle & Google "5-Day AI Agents Intensive Course."

## 1. The Challenge: Non-Deterministic AI Workflows
Traditional software security relies on static code paths and predictable execution. AI agents, particularly those using "vibe coding" (natural language orchestration), are inherently non-deterministic. They can write and execute arbitrary code on the fly. This requires a paradigm shift from traditional security to continuous **"Effective Trust"**.

## 2. The 7-Pillar Security Architecture
To establish Effective Trust, the whitepaper outlines a strict 7-pillar architecture for agentic systems:
1. **Identity & Access Management (IAM)**: Strict role-based access for the agent itself.
2. **Ephemeral Sandboxing**: Agents must execute code in isolated, short-lived containers (e.g., Docker, WebAssembly) to limit the "blast radius" if something goes wrong.
3. **Data Loss Prevention (DLP)**: Scrubbing sensitive data from prompts before they hit the LLM.
4. **Human-in-the-Loop (HITL) Triage**: Critical actions (like approving large expenses or committing code to production) require explicit human approval.
5. **Output Validation**: Validating the agent's actions against a set of constraints before execution.
6. **Continuous Monitoring**: Tracking agent behavior in real-time.
7. **Red/Blue/Green Triad**: Expanding the traditional Red (Attack) and Blue (Defense) teams to include Green (AI models that automatically patch vulnerabilities discovered by the Red team).

## 3. Defense Against "Slopsquatting"
A unique threat to AI coding agents is **Slopsquatting**.
- **The Threat**: An LLM might hallucinate a highly plausible, but non-existent, library name (e.g., `requests-http2-parser`). Malicious actors monitor these hallucinations and upload malware packages with those exact names to public registries (like PyPI or npm). When the agent automatically installs the hallucinated package, it downloads the malware.
- **The Defense**: Automated threat scans, strict dependency pinning, and verifying packages against known-good registries before the agent is allowed to run `pip install` or `npm install`.

## 4. Trajectory Evaluation with OpenTelemetry
Evaluating an agent isn't just about checking the final output; it's about understanding the *trajectory* (the sequence of thoughts and tool calls it made to get there). The course advocates using **OpenTelemetry** to trace every step of the agent's reasoning process, allowing developers to debug where the agent went off track.

## 5. Codelab Learnings

### Build an expense-approval agent with HITL
We learned how to use the Antigravity ADK to create an agent that reviews expense reports. Crucially, we implemented a Human-in-the-Loop (HITL) safeguard: if the agent detects an anomaly (e.g., a massive coffee bill), it pauses its execution and prompts a human manager for a `[Yes/No]` decision before proceeding.

### Write Secure AI Code
We explored how to implement safety guards. We simulated automated threat scans to detect risky code patterns and simulated blocking an agent from installing untrusted dependencies.
