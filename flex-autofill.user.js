// ==UserScript==
// @name         FAST FLEX Feedback Autofill
// @namespace    https://github.com/HaibaNaeem/flex-feedback-autofill
// @version      1.0
// @description  Autofills teacher/lab evaluation forms on FAST FLEX portal.
// @match        https://flexstudent.nu.edu.pk/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function injectButton() {
        if (document.getElementById('flex-autofill-btn')) return;

        const btn = document.createElement('button');
        btn.id = 'flex-autofill-btn';
        btn.innerText = '⚡ Auto-Fill All';
        btn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 999999;
            padding: 12px 24px;
            background-color: #4f46e5;
            color: #ffffff;
            border: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
            transition: all 0.2s ease;
        `;

        btn.onmouseover = () => btn.style.backgroundColor = '#4338ca';
        btn.onmouseout = () => btn.style.backgroundColor = '#4f46e5';

        btn.onclick = function() {
            // Group radio buttons by unique name attributes
            const radioGroups = new Set(
                [...document.querySelectorAll('input[type="radio"]')].map(r => r.name)
            );

            // Select the 1st option ("Strongly Agree") for every question
            radioGroups.forEach(name => {
                const options = document.querySelectorAll(`input[type="radio"][name="${name}"]`);
                if (options.length > 0) {
                    options[0].checked = true;
                    options[0].dispatchEvent(new Event('change', { bubbles: true }));
                    options[0].dispatchEvent(new Event('click', { bubbles: true }));
                }
            });

            // Fill text comments at the bottom
            document.querySelectorAll('textarea').forEach(ta => {
                ta.value = "";
                ta.dispatchEvent(new Event('input', { bubbles: true }));
            });

            // Feedback confirmation styling on button
            btn.innerText = '✅ Completed!';
            btn.style.backgroundColor = '#16a34a';
            setTimeout(() => {
                btn.innerText = '⚡ Auto-Fill All';
                btn.style.backgroundColor = '#4f46e5';
            }, 2000);
        };

        document.body.appendChild(btn);
    }

    // Continuously check for dynamic page loads
    window.addEventListener('load', injectButton);
    setInterval(injectButton, 1000);
})();