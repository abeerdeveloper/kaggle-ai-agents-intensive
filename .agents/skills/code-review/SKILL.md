---
name: code-review
description: Reviews Python code for bugs, logic errors, styling violations, and performance issues. Use when reviewing code files or checking code quality.
---

# Code Review Skill

When reviewing code, follow these steps and criteria:

## Review Checklist

1. **Bug Detection**:
   - Check if variables are used before being defined.
   - Look for missing imports or incorrect library usage.
   - Look out for unhandled exceptions or potential runtime crashes (e.g., accessing attributes on `None` without checking).

2. **Style & Conventions**:
   - Follow standard PEP 8 naming conventions (snake_case for functions/variables, PascalCase for classes).
   - Point out missing docstrings or comments for complex logic.

3. **Performance**:
   - Avoid unnecessary loops or slow calls inside loops (like network or print simulations).

## Feedback Format

- Be specific and cite line numbers when suggesting fixes.
- Explain the reason *why* a change is recommended.
- Provide a clean, corrected code snippet for the user.
