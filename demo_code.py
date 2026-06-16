import time

def GetUserData(users, id):
    # Find user by ID (PEP8 Violation: CamelCase function name)
    for u in users:
        if u['id'] == id:
            return u
    # Bug: If user is not found, returning None could crash the caller
    return None

def ProcessPayments(items):
    # PEP8 Violation: CamelCase function name
    total = 0
    for i in items:
        # Calculate tax
        tax = i['price'] * 0.1
        total = total + i['price'] + tax
        time.sleep(0.5) # Performance issue: simulating slow synchronous operations inside a loop
    
    return total

def RunBatchWork():
    # Bad name, logic issue
    users = [{'id': 1, 'name': 'Alice'}, {'id': 2, 'name': 'Bob'}]
    items = [{'price': 15}, {'price': 30}]
    
    # Bug: Searching for id=3 (which doesn't exist) will return None, crashing the next line
    u = GetUserData(users, 3)
    print("Found user: " + u['name']) 
    
    total = ProcessPayments(items)
    print("Payments total: " + str(total))

if __name__ == "__main__":
    RunBatchWork()
