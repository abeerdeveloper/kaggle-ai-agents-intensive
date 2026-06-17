import time

def human_in_the_loop_triage(expense_details):
    """
    Simulates a Human-in-the-Loop (HITL) intervention.
    The agent pauses execution and requests human approval for high-risk actions.
    """
    print("\n[SECURITY ALERT: HITL REQUIRED]")
    print("The agent has detected an anomalous expense that requires human triage.")
    print(f"Expense Details: {expense_details}")
    
    # In a real scenario, this would block and wait for a UI/CLI input.
    # For this demo, we mock the human input.
    print("Waiting for human manager approval... [Y/N]")
    time.sleep(1.5)
    print(">> Human Input: N")
    return False

def simulate_expense_agent(expenses):
    """
    Simulates an agent reviewing a list of expenses.
    """
    print("--- Antigravity Expense Agent (Secure Mode) ---")
    for expense in expenses:
        print(f"\n[Agent] Analyzing expense: {expense['item']} (${expense['amount']})")
        
        if expense['amount'] > 500:
            print("[Agent] Anomaly detected! Amount exceeds auto-approval threshold.")
            
            # Trigger the HITL safeguard
            is_approved = human_in_the_loop_triage(expense)
            
            if is_approved:
                print(f"[Agent] Expense approved by manager. Processing ${expense['amount']}...")
            else:
                print(f"[Agent] Expense REJECTED by manager. Aborting transaction.")
        else:
            print(f"[Agent] Amount is within normal limits. Auto-approving ${expense['amount']}.")

if __name__ == "__main__":
    test_expenses = [
        {"item": "Office Supplies", "amount": 45.00},
        {"item": "Team Lunch", "amount": 120.00},
        {"item": "Luxury Espresso Machine", "amount": 3500.00} # This should trigger HITL
    ]
    simulate_expense_agent(test_expenses)
