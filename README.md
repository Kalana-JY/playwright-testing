# Playwright Tests

End-to-end testing suite using Playwright.

## Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
npm install
```

### Running Tests

Run all tests:
```bash
npm test
```

Run tests in headed mode:
```bash
npm run test:headed
```

Run tests in debug mode:
```bash
npm run test:debug
```

Run tests with UI mode:
```bash
npm run test:ui
```

### View Test Report

After running tests, view the HTML report:
```bash
npm run report
```

## Project Structure

- `tests/` - Test files
- `playwright.config.js` - Playwright configuration
- `playwright-report/` - HTML test reports (generated)
- `test-results/` - Test results (generated)

## CI/CD

Tests run automatically on push to `main` and `develop` branches, and on pull requests.

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Parallel test execution
- HTML reporting
- Debug mode support
- UI mode for interactive testing
- Automatic retry on failure
- Trace recording

## Configuration

Edit `playwright.config.js` to customize:
- Base URL
- Browser configurations
- Retry settings
- Workers/parallelization
- Reporters

## Resources

- [Playwright Documentation](https://playwright.dev)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [Best Practices](https://playwright.dev/docs/best-practices)