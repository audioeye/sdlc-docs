# About the Testing SDK

AudioEye’s Testing SDK helps web developers and front-end engineers test code for accessibility issues in their local, staging, or CI/CD environments.

Checking for issues early in the development process makes it easier to fix those problems at the source and reduces the volume of issues that make it into your production environments.

## Testing Approach and Limitations

This software development kit (SDK) lets you use AudioEye's automated testing suite to analyze your site and get details of the issues discovered.

Our tests (rules) are based on specific criteria we expect are present in your site or code, as defined by WCAG guidelines. WCAG guidelines are complex and comprised of multiple criteria, some of which cannot be measured accurately by automated testing.

As a result, when your code passes a test, it doesn’t mean the WCAG guideline itself is passed, but rather the details or expected behavior we are looking for in that test is present.

## Types of Testing

There are three ways the AudioEye Testing SDK can help detect issues in your code:

- Component-level testing using Jest or the CLI
- Single-page testing using Puppeteer
- Multi-page (aka workflow) testing using using Cypress

See each page for more details on requirements, what to install, and how to execute a test pass for each of these methods.
