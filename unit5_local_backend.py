import json
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
import urllib.parse

class AgentRequestHandler(BaseHTTPRequestHandler):
    
    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'application/json')
        # Allow CORS so the frontend can hit this API
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_OPTIONS(self):
        self._set_headers()

    def do_POST(self):
        if self.path == '/api/evaluate-expense':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            
            try:
                data = json.loads(post_data.decode('utf-8'))
                item = data.get('item', 'Unknown')
                amount = float(data.get('amount', 0))
                
                print(f"\n[Agent Backend] Received expense report: {item} (${amount:.2f})")
                
                # Simulate agent processing time
                time.sleep(2)
                
                # Agent logic based on the Gherkin specification
                if amount <= 500:
                    status = "Approved"
                    message = "Amount is within auto-approval limits."
                else:
                    status = "Rejected (HITL Required)"
                    message = "Amount exceeds $500 threshold. Sending to human manager for review."
                    
                print(f"[Agent Backend] Decision: {status}")
                
                response_data = {
                    "status": status,
                    "message": message,
                    "item": item,
                    "amount": amount
                }
                
                self._set_headers()
                self.wfile.write(json.dumps(response_data).encode('utf-8'))
                
            except Exception as e:
                self.send_response(400)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def run(server_class=HTTPServer, handler_class=AgentRequestHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Starting local AI Agent backend on port {port}...")
    print("Waiting for frontend requests...")
    httpd.serve_forever()

if __name__ == "__main__":
    run()
