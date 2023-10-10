# About the Testing SDK

AudioEye’s Testing SDK helps web developers test code for accessibility issues in their local, staging, or CI/CD environments.

Checking for issues early in the development process makes it easier to fix those problems at the source and reduces the volume of issues that make it into your production environments.

## Testing Approach and Limitations

This software development kit (SDK) lets you use AudioEye's automated testing suite to analyze your site and get details of the issues discovered.

Each individual test in the automated test package is called a rule (RuleCode). Rules are based on specific criteria we expect are present in your site or code, as defined by WCAG guidelines. One rule can fail for different reasons, which are returned as issues (ResultCode).

WCAG guidelines are complex and comprised of multiple criteria, some of which cannot be measured accurately by automated testing. If a rule does not detect any issues, it doesn’t mean the WCAG guideline itself is passed. Rather, the details or expected behavior written in each rule are present.

## Types of Testing

There are two ways the AudioEye Testing SDK can help detect issues in your code:

- Component-level testing using Jest
- Single-page testing using the CLI
<!-- - Multi-page (aka workflow) testing using using Cypress -->

See each page for more details on requirements, what to install, how to execute a test pass, and what results to expect for each of these methods.
