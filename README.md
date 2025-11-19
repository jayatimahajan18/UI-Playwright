## 🛠️ Project Setup

### Prerequisites

You need the following installed on your system:

* **Node.js** (LTS version recommended)
* **npm** (Node Package Manager)

### Installation Steps

1.  **Clone the Repository** (or unpack the zip file).
2.  **Install Dependencies:** Navigate to the root directory of the project and run the following command to install Playwright and other necessary packages:

    ```bash
    npm install
    ```

3.  **Install Browsers:** Ensure the Playwright browsers (Chromium, Firefox, WebKit) are installed:

    ```bash
    npx playwright install
    ```

---

## ⚙️ Project Configuration

The **`playwright.config.ts`** file is configured to meet all framework requirements.

### 1. Browser Modes (Headed/Headless)

Tests are configured to run in three major browsers and support both headless (default) and headed mode via the command line.

### 2. Custom JSON Reporter

A custom Playwright reporter, located at **`./reports/test-results.json`**, is enabled to generate a structured JSON output of the test results.

* It captures the **test case name**, **status (pass/fail)**, and the **error message** upon failure.

---
## ⚙️ Scope

Choice of 2 products from Books category only.


## 🚀 Execution Instructions

All test runs should be executed from the project root directory.

### 1. Standard Execution (Headless)

This command runs the tests in **headless** mode across all configured browsers and generates the custom JSON report.
Or
Using run button as well test can be 

### 2. Another Execution (Headed)


```bash
(headed mode)
npx playwright test --headed

(headless mode)
npx playwright test