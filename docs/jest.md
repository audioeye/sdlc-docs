# Testing With Jest

The AudioEye Testing SDK Jest Library gives you the ability to write Jest tests to test components of your project.

## Pre-requisites
xxx

## Installing the library

You can install the Jest package locally (as a developer only dependency) in your project.

```bash
npm install -D @audioeye/testing-sdk-jest
```

Set up the test matchers in your [Jest configuration file](https://jestjs.io/docs/configuration#setupfilesafterenv-array).

<CodeGroup>
  <CodeGroupItem title="Javascript" active>

```js
const config = {
  setupFilesAfterEnv: ['@audioeye/testing-sdk-jest'],
};
module.exports = config;
```

  </CodeGroupItem>

  <CodeGroupItem title="Typescript">

```ts
const config = {
  setupFilesAfterEnv: ['@audioeye/testing-sdk-jest'],
};
module.exports = config;
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

<CodeGroup>
  <CodeGroupItem title="Javascript" active>

```javascript
it('should not find accessibility issues', async () => {
  await expect(htmlWithAccessibleContent).not.toFindAccessibilityIssues();
});
```

  </CodeGroupItem>
</CodeGroup>

### toOnlyHaveTheseAccessibilityIssues
Use to define which accessibility issues are expected. Pass a comma separated list of expected test names.

<CodeGroup>
  <CodeGroupItem title="Javascript" active>

```javascript
it('should find an imgTextAlt issue', async () => {
  await expect(htmlWithImgTextAltIssue).toOnlyHaveTheseAccessibilityIssues('imgTextAlt');
});
```

  </CodeGroupItem>
  <CodeGroupItem title="Typescript" >

```typsescript
it('should find an imgTextAlt issue', async () => {
  await expect(htmlWithImgTextAltIssue).toOnlyHaveTheseAccessibilityIssues('imgTextAlt');
});
```

  </CodeGroupItem>

</CodeGroup>

### toHaveAccessibilityIssueCount
Verifying that a specific number of Accessibility Issues is returned.

<CodeGroup>
  <CodeGroupItem title="Javascript" active>

```javascript
it('passes when expected issue count is 0 and no issues are found', async () => {
  await expect(rawElementWithNoAccessibilityIssues).toHaveAccessibilityIssueCount(0);
});
```

  </CodeGroupItem>
  <CodeGroupItem title="Typescript">

```typescript
it('passes when expected issue count is 0 and no issues are found', async () => {
  await expect(rawElementWithNoAccessibilityIssues).toHaveAccessibilityIssueCount(0);
});
```

  </CodeGroupItem>
</CodeGroup>
