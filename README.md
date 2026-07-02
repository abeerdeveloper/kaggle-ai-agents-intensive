# Kaggle AI Agents Intensive: Vibe Coding Portfolio & Capstone

This repository contains my complete coursework, study guides, and custom implementations built during the **Kaggle & Google 5-Day AI Agents Intensive Course** (June 15 - 19, 2026), culminating in a full-stack Capstone Project.

---

## 🏆 Capstone Project: AI Expense Approval Agent
* **Track:** Enterprise Agents
* **Pitch:** Manual expense triage is slow, costly, and error-prone. This project delivers an automated **AI Expense Approval Agent** that automatically approves standard low-value claims, while employing robust security scans and a **Human-in-the-Loop (HITL)** triage system to pause and request human review for anomalous or high-value claims.

### ⚙️ Core Agentic Concepts Implemented (Meets Capstone Criteria)
This project demonstrates key concepts from the Google Agent Intensive course:
1. **Multi-Agent Systems & ADK:** Simulates agent orchestration using the Agent Development Kit (ADK) to dynamically load specialized skills.
2. **Agent Skills & Progressive Disclosure:** Isolates agent prompts, tools, and constraints inside a structured `.agents/skills` directory, avoiding "context rot" by loading skill definitions dynamically.
3. **Long-Running Operations (HITL):** Implements a secure workflow where high-value expenses (> $500) trigger a pause-and-resume triage loop, awaiting explicit human approval.
4. **Security & Slopsquatting Protection:** Integrates a pre-execution dependency scanner to block the agent from installing hallucinated, malicious libraries.
5. **Spec-Driven Development (SDD):** Designed using a Gherkin `.feature` specification file as the absolute source of truth before code generation.

---

## 📂 Repository Structure

### 🌐 Applications
* 🎨 **`index.html` / `style.css` / `app.js` (VibeBoard):** A premium glassmorphic dashboard visualizing the Factory Model, SDLC loop, and featuring an interactive agent run simulator (Unit 1).
* 💼 **`unit5_frontend.html` / `css` / `js` (AI Expense Portal):** The full-stack user interface that sends expense claims to the running AI backend via asynchronous REST API calls.

### 🐍 Python Backend & Demos
* ⚙️ **`unit5_local_backend.py`:** A local Python HTTP server simulating a cloud-hosted containerized AI Agent with built-in expense triage and CORS support.
* 🛡️ **`unit4_expense_agent.py` & `unit4_security_scan_demo.py`:** Standalone scripts showing HITL safeguards and dependency threat scanning.
* 🧠 **`unit3_adk_demo.py`:** Simulates programmatic skill loading via the ADK.
* ⚙️ **`unit2_cli_demo.py`:** Simulates CLI tool execution and MCP protocol interactions.
* 🛠️ **`demo_code.py`:** Bad code sample used to test the automated code-review skill.

### 📚 Study Guides & Specs
* 📝 **`unit1_study_guide.md` to `unit5_study_guide.md`:** Comprehensive study notes summarizing the course whitepapers.
* ⚙️ **`unit5_expense_agent.feature`:** The BDD Gherkin specification outlining the agent behavior.
* 🗺️ **`unit5_cloud_deployment_notes.md`:** Architectural guide to containerizing and deploying the agent to Google Cloud Run.

---

## 🚀 How to Run the App Locally

To run the full-stack AI Expense Portal locally on your machine, follow these steps:

### 1. Start the Backend AI Agent
Open PowerShell or your terminal and run:
```powershell
python unit5_local_backend.py
```
*(If Python is not on your PATH, use the full path to your Python executable, e.g. `& "C:\Users\<YourUser>\AppData\Local\Programs\Python\Python312\python.exe" unit5_local_backend.py`)*

You should see:
```
Starting local AI Agent backend on port 8000...
Waiting for frontend requests...
```

### 2. Run the Static Web Server
In a second terminal window, run:
```powershell
python -m http.server 8080
```

### 3. Open the Portals
Open your web browser and navigate to:
* **VibeBoard Dashboard:** [http://localhost:8080/index.html](http://localhost:8080/index.html)
* **AI Expense Portal:** [http://localhost:8080/unit5_frontend.html](http://localhost:8080/unit5_frontend.html)
