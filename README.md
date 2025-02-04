# Jest TypeScript Archetype

This project is a basic template for setting up a test environment with Jest and TypeScript. It includes examples of unit and embedded tests, as well as the configuration needed to run and cover the tests.

## Project structure

├── .gitignore
├── coverage/
│ ├── clover.xml
│ ├── coverage-final.json
│ ├── lcov-report/
│ │ ├── base.css
│ │ ├── block-navigation.js
│ │ ├── index.html
│ │ ├── index.ts.html
│ │ ├── prettify.css
│ │ ├── prettify.js
│ │ ├── sorter.js
│ ├── lcov.info
├── jest.config.js
├── package.json
├── src/
│ ├── apiService.ts
│ ├── index.ts
├── test/
│ ├── apiService.integration.realApi.test.ts
│ ├── apiService.integration.test.ts
│ ├── index.test.ts
├── tsconfig.json

## Installation

1. Clona el repositorio:

   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd jest-ts-archetype

   ```

2. Install dependencies

   ```
   npm install

   ```

3. Scripts

```
npm run test

test-coverage: run tests with coverage info.

4. Configuration

# Jest

Jest configuration is located in the jest.config.js file. It uses ts-jest to transform TypeScript files.

# TypeScript

The TypeScript configuration is in the tsconfig.json file. It is configured to use es2016 as target and commonjs as module.

# Code Structure

apiService.ts
- This file contains functions to interact with an example public API.
- fetchUser(userId: number): Gets the data of a user by its ID.
- createUser(userData: { name: string; email: string }): Creates a new user.
- updateUser(userId: number, userData: { name: string; email: string }): Updates an existing user.
- index.ts
- This file contains a simple sum function.

# test
This directory contains the tests for the functions in src.

- apiService.integration.realApi.test.ts: Integration tests that interact with the real API.
- apiService.integration.integration.test.ts: Integration tests that use Axios mocks.
- index.test.ts: Unit tests for the sum function.
- Code Coverage
- After running npm run test-coverage, a coverage report will be generated in the lcov-report directory. You can - open index.html in a browser to view the report.

# Contributions
Contributions are welcome. Please open an issue or pull request to discuss any changes you would like to make.
```
