# Testing With Jest

The AudioEye Testing SDK Jest Library gives you the ability to write Jest tests to test components of your project.

## Pre-requisites
Visit the [Getting Started](get-started.md) page to learn how to setup Jest in your project.

**Note:** This guide's Jest test examples assume you're working in a browser environment. With Jest 27+, you will need to configure Jest to run with JSDOM. You can find more information on how to do that [here](https://jestjs.io/docs/configuration#testenvironment-string).

## Installing the library

You can install the Jest package locally (as a developer only dependency) in your project.

```bash
npm install -D @audioeye/testing-sdk-jest
```

Set up the test matchers in your [Jest configuration file](https://jestjs.io/docs/configuration#setupfilesafterenv-array).

<CodeGroup>
  <CodeGroupItem title="Javascript" active>

```javascript
const config = {
  setupFilesAfterEnv: ['@audioeye/testing-sdk-jest'],
};
module.exports = config;
```

  </CodeGroupItem>

  <CodeGroupItem title="Typescript">

```typescript
import type {Config} from 'jest';

const config: Config = {
  setupFilesAfterEnv: ['@audioeye/testing-sdk-jest'],
};

export default config;
```

  </CodeGroupItem>
</CodeGroup>


Or if using create-react-app, add the following to your `src/setupTests.js` file.

```javascript
import '@audioeye/testing-sdk-jest';
```

## Usage
Import the SDK into your test file, render your component, and then use the [available tests](#available-tests) to test for accessibility issues.

Here's an example using React components and the [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

```typescript
import "@audioeye/testing-sdk-jest";

import { render, RenderResult } from "@testing-library/react";
import React from "react";

import { Image } from "./image";

describe("Image", () => {
  describe("Image WITHOUT alt text", () => {
    it("should render successfully", () => {
      const {
        container: { innerHTML },
      } = render(<Image />);
      expect(innerHTML).toMatchSnapshot();
    });

    it("should have accessibility issues", async () => {
      await expect(render(<Image />)).toFindAccessibilityIssues();
    });

    it("should have an imgTextAlt issue", async () => {
      await expect(render(<Image />)).toOnlyHaveTheseAccessibilityIssues(
        "imgTextAlt"
      );
    });
  });

  describe("Image WITH alt text", () => {
    it("should render successfully", () => {
      const {
        container: { innerHTML },
      } = render(<Image altText="The AudioEye company logo" />);
      expect(innerHTML).toMatchSnapshot();
    });

    it("should not have accessibility issues", async () => {
      await expect(
        render(<Image altText="The AudioEye company logo" />)
      ).not.toFindAccessibilityIssues();
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
it('should only find an imgTextAlt and htmlSkipToMainNotFound issues', async () => {
  await expect(htmlWithAFewIssues).toOnlyHaveTheseAccessibilityIssues(
    'imgTextAlt',
    'htmlSkipToMainNotFound'
  );
});
```
