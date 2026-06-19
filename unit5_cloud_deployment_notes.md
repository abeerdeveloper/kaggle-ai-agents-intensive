# Unit 5: Cloud Deployment Architecture Notes

This document provides a high-level overview of how to deploy an Antigravity AI Agent to Google Cloud, based on the optional codelabs in Unit 5.

## 1. Containerization
The first step to deploying an agent is packaging it so it can run consistently anywhere.
- Create a `Dockerfile` that includes the Python runtime, Antigravity CLI, ADK, and all necessary dependencies.
- Copy your Agent Skills (`.agents/skills/`) and scripts into the container image.
- Build the image using `docker build` or Google Cloud Build.

## 2. Deploy to Google Cloud Run
Google Cloud Run is a fully managed, serverless platform that automatically scales containers.
- Push the container image to Google Artifact Registry.
- Deploy the image to Cloud Run.
- **Benefit**: You don't manage any servers, and it scales from zero to thousands of instances automatically depending on the workload.

## 3. Asynchronous Event-Driven Triggers
Enterprise agents rarely sit around waiting for direct API calls; they react to events in the ecosystem.
- **Eventarc**: Use Google Eventarc to route events from various Google Cloud services directly to your Cloud Run agent.
- **Example Flow**:
  1. An employee uploads a PDF receipt to a Google Cloud Storage bucket.
  2. This triggers a `google.cloud.storage.object.v1.finalized` event.
  3. Eventarc forwards this event to your Cloud Run agent.
  4. The agent wakes up, loads the Expense Approval skill, analyzes the receipt, and logs the decision to a database.

## 4. Frontend Client Integration
Once the agent is hosted, you can build a user interface to interact with it.
- Build a modern web app (e.g., React, Vue, or Vanilla JS) and host it via Firebase Hosting or Cloud Run.
- The web app communicates with the agent's Cloud Run endpoint via REST APIs.
- For long-running agent tasks, implement WebSockets or polling to stream the agent's "thoughts" and actions back to the user interface in real-time.
