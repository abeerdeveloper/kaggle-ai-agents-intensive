const form = document.getElementById('expense-form');
const submitBtn = document.getElementById('submit-btn');
const btnLoader = document.getElementById('btn-loader');
const resultBox = document.getElementById('result-box');
const decisionStatus = document.getElementById('decision-status');
const decisionMessage = document.getElementById('decision-message');

const BACKEND_URL = 'http://localhost:8000/api/evaluate-expense';

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const item = document.getElementById('item').value;
    const amount = document.getElementById('amount').value;

    // Show loading state
    submitBtn.disabled = true;
    btnLoader.style.display = 'block';
    submitBtn.querySelector('span').textContent = 'Agent is thinking...';
    resultBox.classList.add('hidden');

    try {
        const response = await fetch(BACKEND_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item, amount: parseFloat(amount) })
        });

        if (!response.ok) {
            throw new Error('Backend server returned an error.');
        }

        const data = await response.json();

        // Display result
        decisionStatus.textContent = data.status;
        decisionMessage.textContent = `"${data.item}" ($${parseFloat(data.amount).toFixed(2)}) — ${data.message}`;

        // Style the badge based on result
        decisionStatus.className = 'status-badge';
        if (data.status === 'Approved') {
            decisionStatus.classList.add('status-approved');
        } else {
            decisionStatus.classList.add('status-rejected');
        }

        resultBox.classList.remove('hidden');

    } catch (error) {
        decisionStatus.textContent = 'Connection Error';
        decisionStatus.className = 'status-badge status-rejected';
        decisionMessage.textContent = 'Could not connect to the AI agent backend. Make sure unit5_local_backend.py is running!';
        resultBox.classList.remove('hidden');
    } finally {
        // Restore button state
        submitBtn.disabled = false;
        btnLoader.style.display = 'none';
        submitBtn.querySelector('span').textContent = 'Submit to AI Agent';
    }
});
