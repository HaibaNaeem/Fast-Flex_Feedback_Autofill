# FAST FLEX Feedback Autofill ⚡

A lightweight Tampermonkey userscript that automates FAST FLEX teacher and lab evaluation feedback forms. It selects **Strongly Agree** for all ratings and clears feedback comment boxes instantly.

It's a one time **Quick Set-Up** taking about 1 minute of your time, while saving you a lot of time for the rest of your degree.

**WORK SMART NOT HARD :)**

---
### There are two ways to do it.
1. Through your personal gmail account (@gmail.com). 
As university's provided domain id restricts the installation of extentions from Chrome Web Store, we can install the extension on our personal gmail account and log in to our flex from here.

## Installation

### Step 1: Install Tampermonkey
1. Go to the <a href="https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo" target="_blank" rel="noopener noreferrer">Tampermonkey Chrome Web Store Page</a>.
2. Click **Add to Chrome**, then select **Add extension**.

---

### Step 2: Install the Script
1. Click the <a href="https://www.tampermonkey.net/script_installation.php#url=https://github.com/HaibaNaeem/Fast-Flex_Feedback_Autofill/raw/refs/heads/main/flex-autofill.user.js" target="_blank" rel="noopener noreferrer">One-Click Script Installation Link</a>.
2. Tampermonkey will open an installation tab. Click **Install**.

---

### Step 3: Enable Developer Mode (Required by Chrome)
1. Open a new tab and go to `chrome://extensions`.
2. Toggle **Developer mode** **ON** in the top-right corner.
3. Find **Tampermonkey**, click **Details**, and toggle **Allow user scripts** **ON**. If can't find there check **Tampermonkey**, -> **Details** -> **Manage Extensions**, scroll down to **Allow user scripts** **ON**

---

## How to Use

1. Log into **FAST FLEX** and open any evaluation page (`/Student/FeedBackQuestions`).
2. Click the **⚡ Auto-Fill All** button at the bottom-right of the screen.
3. Click **Submit**.

---

## Supported Browsers & Platforms

* **Windows & macOS:** Fully supported on **Google Chrome**, **Brave**, **Microsoft Edge**, and **Arc**.
* **Safari (macOS):** Requires the free <a href="https://apps.apple.com/app/userscripts/id1463298887" target="_blank" rel="noopener noreferrer">Userscripts extension</a> from the Mac App Store (or run the script via Chrome for Mac).


---

### 2. Through University's provided id
Method: Bookmarklet (For FAST `@nu.edu.pk` Accounts)

University-managed Google Workspace accounts often block Chrome extensions and Tampermonkey. Using this zero-installation bookmarklet instead:

1. Press **`Ctrl + Shift + O`** in Chrome to open the **Bookmark Manager** (or right-click your toolbar and select **Add page/bookmark...**).
2. Set the **Name** to `⚡ Auto-Fill Course Feedback`.
3. Copy and paste the following code into the **URL** field:

```javascript
javascript:(function(){var u=window.location.href;var isFB=u.includes('/Student/FeedBackQuestions')||u.includes('/Student/CourseFeedback');var r=document.querySelectorAll('input[type="radio"]');if(!isFB||!r.length){alert('Not on a valid FAST FLEX feedback page with questions.');return;}var n=[];for(var i=0;i<r.length;i++){if(n.indexOf(r[i].name)===-1)n.push(r[i].name);}n.forEach(function(m){var o=document.querySelectorAll('input[type="radio"][name="'+m+'"]');if(o.length){o[0].checked=true;o[0].dispatchEvent(new Event('change',{bubbles:true}));o[0].dispatchEvent(new Event('click',{bubbles:true}));}});document.querySelectorAll('textarea').forEach(function(t){t.value="";t.dispatchEvent(new Event('input',{bubbles:true}));});})();
```

4. Click Save.

5. Open any teacher or lab evaluation page on Flex and click your ⚡ Auto-Fill Feedback bookmark to autofill all questions instantly!