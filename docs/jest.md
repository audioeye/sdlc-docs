# Jest Library

The AudioEye Testing SDK Jest Library gives you the ability to write Jest tests to test components of your project.

## Pre-requisites
xxx

## Installing the library

You can install the Jest package locally (as a developer only dependency) in your project.

```bash
npm install -D @audioeye/testing-sdk-jest
```

Set up the test matchers in your [Jest configuration file](https://jestjs.io/docs/configuration#setupfilesafterenv-array).

```javascript
const config = {
  setupFilesAfterEnv: ['@audioeye/testing-sdk-jest'],
};

module.exports = config;
```

Or if using create-react-app, add the following to your `src/setupTests.js` file.

```javascript
import '@audioeye/testing-sdk-jest';
```

## Usage
Import the SDK into your test file, render your component, and then use the [available tests](#available-tests) to test for accessibility issues.

Here's an example using React components and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

```javascript
import "@audioeye/testing-sdk-jest";

import { render } from "@testing-library/react";
import React from "react";

import { Image } from "./image";

describe("Image", () => {
  describe("Image WITHOUT alt text", () => {
    const { container } = render(<Image />);
    const { innerHTML } = container;

    it("should have accessibility issues", async () => {
      await expect(innerHTML).toFindAccessibilityIssues();
    });

    it("should have an imgTextAlt issue", async () => {
      await expect(innerHTML).toOnlyHaveTheseAccessibilityIssues("imgTextAlt");
    });
  });

  describe("Image WITH alt text", () => {
    const { container } = render(<Image altText="The AudioEye company logo" />);
    const { innerHTML } = container;

    it("should not have accessibility issues", async () => {
      await expect(innerHTML).not.toFindAccessibilityIssues();
    });
  });
});
```

## Available Tests

### toFindAccessibilityIssues
Used to identify if accessibility issues are found.

```javascript
it('should not find accessibility issues', async () => {
  await expect(htmlWithAccessibleContent).not.toFindAccessibilityIssues();
});
```

### toOnlyHaveTheseAccessibilityIssues
Use to define which accessibility issues are expected. Pass a comma separated list of expected test names.

```javascript
it('should find an imgTextAlt issue', async () => {
  await expect(htmlWithImgTextAltIssue).toOnlyHaveTheseAccessibilityIssues('imgTextAlt');
});
```

### toHaveAccessibilityIssueCount
Verifying that a specific number of Accessibility Issues is returned.

```javascript
it('passes when expected issue count is 0 and no issues are found', async () => {
  await expect(rawElementWithNoAccessibilityIssues).toHaveAccessibilityIssueCount(0);
});
```
