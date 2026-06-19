Feature: Expense Approval Agent
  As an enterprise finance team
  We want the AI agent to automatically triage and approve standard expenses
  So that managers only need to review anomalous or high-value claims

  Scenario: Auto-approve standard low-value expenses
    Given the expense agent receives a new expense report
    And the item category is "Office Supplies"
    And the total amount is $45.00
    When the agent processes the expense
    Then the expense should be automatically marked as "Approved"
    And the agent should log the decision to the finance database
    And no human intervention is required

  Scenario: Trigger Human-in-the-Loop (HITL) for high-value anomalous expenses
    Given the expense agent receives a new expense report
    And the item category is "Luxury Espresso Machine"
    And the total amount is $3500.00
    When the agent processes the expense
    Then the agent must detect the amount exceeds the auto-approval threshold of $500.00
    And the agent must pause execution
    And the agent must send a notification to the assigned human manager
    And the agent must wait for a explicit [Yes/No] response before proceeding
