This repository contains Playwright automation scripts for testing the Advantage Shopping Demo application using **TypeScript**.
Prerequisites
- Node.js
- npm
- git
- code editor[VSCode]

SetUp Instructions
1.Clone the repository
git clone https://github.com/jeslinjai123/AdvantageShoppingDemo.git
2.Install dependencies
npm install
3.Install playwright browsers
npx playwright install

Running Tests
1.Run all tests
npx playwright test
2.Run a specific test
npx playwright test tests/login_page.spec.ts

Project Structure
AdvantageShoppingDemo/
│
├── tests/                    # Test scripts (e.g., login, create account)
├── pages/                    # Page Object Model classes
├── utility/                  # utility methods
├── config/
│   └── data_config/          # Test data (YAML files)
├── locators/                 # for writing locators
├── playwright.config.ts      # Playwright configuration
└── package.json

