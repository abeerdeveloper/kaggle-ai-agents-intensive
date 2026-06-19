# Unit 5: Spec-Driven Production Grade Development - Study Guide

This guide summarizes the core concepts from the Unit 5 whitepaper and codelabs of the Kaggle & Google "5-Day AI Agents Intensive Course."

## 1. Bridging the Gap: Vibe Coding vs. Enterprise Software
"Vibe coding" (using natural language to generate prototypes quickly) is incredible for velocity, but it often results in fragile, undocumented, and difficult-to-maintain code. To bring AI agents into enterprise production, a more rigorous approach is needed.

## 2. Spec-Driven Development (SDD)
The whitepaper introduces **Spec-Driven Development (SDD)** as the solution. In SDD, the code itself is treated as an implementation detail (often disposable), while the **Specification** becomes the absolute source of truth.

### Behavior-Driven Specifications (Gherkin)
Specifications should be written in a human-readable, behavior-driven format like Gherkin (Given/When/Then). This ensures that product managers, security teams, and AI agents all share the exact same understanding of what the software must do.

### Code as Disposable
Because AI can generate code rapidly, you no longer need to fear deleting large swaths of code. If a new requirement is added, you update the *specification*, and the agent completely regenerates the code to match the new spec.

## 3. Zero-Trust Pipelines and Policy Servers
To ensure that vibe-coded software is secure and meets enterprise standards before it hits production, the course advocates for:
- **Automated Code-Review Agents**: Agents specifically trained to look for anti-patterns, security flaws, and deviations from the specification.
- **Hybrid Policy Servers**: A central, deterministic policy engine that evaluates the outputs of non-deterministic LLMs. The Policy Server ensures compliance with corporate regulations (e.g., data residency, PII scrubbing) before any code is merged.

## 4. Cloud Deployment Architecture (Optional Codelabs)
The optional codelabs demonstrate what this looks like at scale using Google Cloud:
- **Cloud Run Deployment**: Packaging the AI agent into a container and deploying it as a highly scalable microservice on Google Cloud Run.
- **Asynchronous Event Triggering**: Instead of synchronous API calls, setting up event-driven architectures (e.g., using Pub/Sub or Eventarc). For example, when an expense report is uploaded to a Cloud Storage bucket, it automatically triggers the expense-approval agent.
- **Frontend Integration**: Building a modern client interface (e.g., in React or Vue) that securely interacts with the cloud-hosted agent via standard REST APIs or WebSockets.
