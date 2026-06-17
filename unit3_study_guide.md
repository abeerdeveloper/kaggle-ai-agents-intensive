# Unit 3: Agent Skills - Study Guide

This guide summarizes the core concepts from the Unit 3 whitepaper and codelabs of the Kaggle & Google "5-Day AI Agents Intensive Course."

## 1. The Problem: "Context Rot"
When building complex AI agents, it's tempting to stuff the system prompt with every possible tool, instruction, and constraint. However, as the prompt grows, the model's ability to focus degrades. This phenomenon is known as **Context Rot**. Large, monolithic prompts lead to:
- Slower response times (higher latency)
- Increased token costs
- Poor instruction following and hallucinations
- Difficulty in maintaining and updating agent behavior

## 2. The Solution: Agent Skills and Progressive Disclosure
To combat context rot, the course introduces **Agent Skills**. Instead of giving an agent all tools at once, we use a concept called **Progressive Disclosure**.
- **Progressive Disclosure**: The system prompt is kept extremely lightweight (e.g., "You are a helpful assistant"). The agent is given a single tool to *discover* what skills are available.
- When the agent encounters a specific task, it dynamically loads only the exact skill needed for that task.

## 3. Anatomy of an Agent Skill
An Agent Skill is not just a tool; it's a structured directory that encapsulates everything an agent needs to perform a specialized role.
- **`SKILL.md` (The Core)**: This file contains the primary instructions, constraints, and the specialized prompt for the skill.
- **`/tools/`**: A subdirectory containing specific Python scripts, MCP server configurations, or APIs needed for this skill.
- **`/resources/`**: Static context, templates, or documentation the agent might need to reference.

By structuring skills this way, a single base agent can dynamically "flex" into hundreds of specialized roles—from a Senior Python Code Reviewer to a Database Architect—without suffering from context rot.

## 4. Codelab Learnings

### Explore how Skills work in Antigravity
We learned how the `.agents/skills` directory is structured. Antigravity automatically scans this directory to expose available skills to the active agent.

### Build agents with Agents CLI and ADK
We utilized the **Agent Development Kit (ADK)**. The ADK allows developers to programmatically instantiate agents, load specific skills from the filesystem, and orchestrate their execution using Python. We used natural language to tell the CLI to scaffold a new skill, test it, and refine its behavior iteratively.
