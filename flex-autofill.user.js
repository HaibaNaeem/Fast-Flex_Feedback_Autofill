// ==UserScript==
// @name         FAST FLEX Feedback Autofill
// @namespace    https://github.com/HaibaNaeem/flex-feedback-autofill
// @version      1.4
// @description  Autofills teacher/lab evaluation forms on FAST FLEX portal.
// @match        https://flexstudent.nu.edu.pk/Student/FeedBackQuestions*
// @match        https://flexstudent.nu.edu.pk/Student/CourseFeedback*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function injectButton() {
        // Only show button if evaluation radio options exist on the active page
        var hasRadioButtons = document.querySelectorAll('input[type="radio"]').length > 0;
        var existingBtn = document.getElementById('flex-autofill-btn');

        if (!hasRadioButtons) {
            if (existingBtn) existingBtn.remove();
            return;
        }

        if (existingBtn) return;

        var btn = document.createElement('button');
        btn.id = 'flex-autofill-btn';
        btn.innerText = '⚡ Auto-Fill All';
        
        btn.style.position = 'fixed';
        btn.style.bottom = '30px';
        btn.style.right = '30px';
        btn.style.zIndex = '999999';
        btn.style.padding = '12px 24px';
        btn.style.backgroundColor = '#4f46e5';
        btn.style.color = '#ffffff';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.fontWeight = '600';
        btn.style.fontSize = '14px';
        btn.style.cursor = 'pointer';
        btn.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.25)';
        btn.style.transition = 'all 0.2s ease';

        btn.onmouseover = function() { btn.style.backgroundColor = '#4338ca'; };
        btn.onmouseout = function() { btn.style.backgroundColor = '#4f46e5'; };

        btn.onclick = function() {
            var radioNames = [];
            var radios = document.querySelectorAll('input[type="radio"]');
            
            for (var i = 0; i < radios.length; i++) {
                if (radioNames.indexOf(radios[i].name) === -1) {
                    radioNames.push(radios[i].name);
                }
            }

            radioNames.forEach(function(name) {
                var options = document.querySelectorAll('input[type="radio"][name="' + name + '"]');
                if (options.length > 0) {
                    options[0].checked = true;
                    options[0].dispatchEvent(new Event('change', { bubbles: true }));
                    options[0].dispatchEvent(new Event('click', { bubbles: true }));
                }
            });

            document.querySelectorAll('textarea').forEach(function(ta) {
                ta.value = "";
                ta.dispatchEvent(new Event('input', { bubbles: true }));
            });

            btn.innerText = '✅ Completed!';
            btn.style.backgroundColor = '#16a34a';
            setTimeout(function() {
                btn.innerText = '⚡ Auto-Fill All';
                btn.style.backgroundColor = '#4f46e5';
            }, 2000);
        };

        document.body.appendChild(btn);
    }

    setInterval(injectButton, 500);
})();