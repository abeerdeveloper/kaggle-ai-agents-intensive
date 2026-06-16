document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    body.className = savedTheme;

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // 2. Accordions
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains('active');

            // Collapse other items
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // 3. Checklist Progress Tracking
    const checkboxes = document.querySelectorAll('.task-checkbox');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Load checklist states from localStorage
    checkboxes.forEach((cb, index) => {
        const state = localStorage.getItem(`task-${index}`);
        if (state === 'true') {
            cb.checked = true;
        }
    });

    function updateProgress() {
        let checkedCount = 0;
        checkboxes.forEach((cb, index) => {
            if (cb.checked) {
                checkedCount++;
            }
            // Save state
            localStorage.setItem(`task-${index}`, cb.checked);
        });

        const percent = Math.round((checkedCount / checkboxes.length) * 100);
        progressBar.style.width = `${percent}%`;
        progressText.innerText = `${percent}%`;
    }

    checkboxes.forEach(cb => {
        cb.addEventListener('change', updateProgress);
    });

    // Initial run
    updateProgress();

    // 4. Agent Execution Simulator
    const runAgentBtn = document.getElementById('run-agent-btn');
    const consoleLogs = document.getElementById('console-logs');

    const simulationSteps = [
        { text: '➔ [Agent] Spawning subagent context...', type: 'agent' },
        { text: '➔ [Agent] Scanning workspace directory for projects...', type: 'agent' },
        { text: '➔ [Agent] Found project "Kaggle" - Loading skill: code-review...', type: 'agent' },
        { text: '➔ [Agent] Parsing target file: demo_code.py...', type: 'agent' },
        { text: '⚠ [Warning] PEP8 Naming violations found (GetUserData, ProcessPayments).', type: 'error' },
        { text: '⚠ [Bug] Unhandled None reference detected at line 26 (u[\'name\']).', type: 'error' },
        { text: '➔ [Agent] Initiating self-healing loop: Creating code edits...', type: 'agent' },
        { text: '✔ [Success] Created corrected file structure.', type: 'success' },
        { text: '➔ [Agent] Running build test script locally...', type: 'agent' },
        { text: '✔ [Success] Compilation tests passed.', type: 'success' },
        { text: '➔ [Agent] Preparing deployment container for Cloud Run...', type: 'agent' },
        { text: '✔ [Success] Deployment complete! URL: https://vibe-orchestrator-kag.run.app', type: 'success' }
    ];

    function appendLog(text, type) {
        const div = document.createElement('div');
        div.className = `log-line ${type}`;
        div.innerText = text;
        consoleLogs.appendChild(div);
        consoleLogs.scrollTop = consoleLogs.scrollHeight; // Auto scroll
    }

    runAgentBtn.addEventListener('click', () => {
        // Disable button during execution
        runAgentBtn.disabled = true;
        
        // Clear logs except a system line
        consoleLogs.innerHTML = '';
        appendLog('System initialized. Starting agent loop...', 'system');

        let stepIndex = 0;
        
        function runNextStep() {
            if (stepIndex < simulationSteps.length) {
                const step = simulationSteps[stepIndex];
                appendLog(step.text, step.type);
                stepIndex++;
                
                // Add variable speed/timings for realism
                const delay = 600 + Math.random() * 800;
                setTimeout(runNextStep, delay);
            } else {
                runAgentBtn.disabled = false;
                appendLog('System idle. Run finished successfully.', 'system');
            }
        }

        // Start simulation after 400ms
        setTimeout(runNextStep, 400);
    });
});
