# Kaggle AI Agents Intensive: Vibe Coding (Unit 1)

This repository contains materials, code files, and projects built during **Unit 1: Introduction to Agents & Vibe Coding** of the Kaggle & Google 5-Day AI Agents Intensive course.

---

## 📂 Repository Structure

- 📖 **`unit1_study_guide.md`**: A comprehensive summary of the course concepts, covering "The New SDLC with Vibe Coding" whitepaper, the "Factory Model" (contexts, constraints, evaluation), and agentic engineering paradigms.
- 🛠️ **`.agents/skills/code-review/`**: A custom agent **Skill** containing `SKILL.md`. This skill instructs Google Antigravity on how to review Python code.
- 🐍 **`demo_code.py`**: A poorly written Python script containing PEP8 violations, synchronous loop inefficiencies, and unhandled `None` bugs, used to test the custom code-review skill.
- 🎨 **`index.html`**, **`style.css`**, **`app.js`**: **VibeBoard: The Agentic Task Orchestrator**, a premium glassmorphic web dashboard built using vanilla HTML5, CSS3, and modern Javascript. It allows you to:
  - Track assignments interactively.
  - Simulate an AI Agent's self-healing compiler and Cloud Run deployment sequence in real time.
  - Toggle between cyber-neon dark mode and a high-contrast light theme.
  - Read whitepaper study sections in an interactive accordion.

---

## 🚀 How to Run the Web Application Locally

To preview your vibe-coded application:
1. Open the project folder in your file explorer.
2. Double-click the **`index.html`** file, or right-click and choose **Open with...** -> **Google Chrome** (or any other browser).
3. Interact with the daily checklist, toggle the theme, or launch the simulated agent execution loop!

---

## 🛠️ GitHub Deployment Setup

To push this repository to your GitHub under the name `kaggle-ai-agents-intensive`:

1. Open a terminal or Command Prompt in this directory.
2. Run the following commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Complete Unit 1 Assignment materials"
   ```
3. Create a **new public repository** on your GitHub account named **`kaggle-ai-agents-intensive`** (do not initialize with a README, gitignore, or license).
4. Run the commands provided by GitHub to link your local workspace to your remote repository:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/kaggle-ai-agents-intensive.git
   git push -u origin main
   ```
5. You can now showcase this on your portfolio!
