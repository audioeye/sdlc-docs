# Testing With Jest

The AudioEye Testing SDK Jest Library gives you the ability to write Jest tests to test components of your project.

## Pre-requisites

Visit the [Getting Started](get-started.md) page to learn how to setup Jest in your project.

**Note:** This guide's Jest test examples use [`@testing-library/react`](https://www.npmjs.com/package/@testing-library/react). Please follow their setup instructions, particularly the differences between Jest versions. [Jest 28](https://jestjs.io/blog/2022/04/25/jest-28#breaking-changes) introduced breaking changes to the testing environment that need to be handled correctly. You can find more information on how to do that [here](https://jestjs.io/docs/configuration#testenvironment-string).

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
  setupFilesAfterEnv: ["@audioeye/testing-sdk-jest"],
};
module.exports = config;
```

  </CodeGroupItem>

  <CodeGroupItem title="Typescript">

```typescript
import type { Config } from "jest";

const config: Config = {
  setupFilesAfterEnv: ["@audioeye/testing-sdk-jest"],
};

export default config;
```

  </CodeGroupItem>
</CodeGroup>

::: tip Create React App users
If you are using [create-react-app](https://create-react-app.dev/), it may already have a `setupFilesAfterEnv` pointing to `src/setupTests.js`. Instead of modifying `setupFilesAfterEnv`, instead add the following to your `src/setupTests.js` file.

```javascript
import "@audioeye/testing-sdk-jest";
```
:::

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

    it("can test with render result and it should find accessibility issues", async () => {
      await expect(render(<Image />)).toFindAccessibilityIssues();
    });

    it("can test with container and it should have an imgTextAlt issue", async () => {
      const { container } = render(<Image />);
      await expect(container).toOnlyHaveTheseAccessibilityIssues(
        "Img_Name_Missing"
      );
    });

    it("can test with fragment and it should match the snapshot", async () => {
      const { asFragment } = render(<Image />);
      await expect(asFragment()).toMatchAccessibilityReportSnapshot();
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

Use `.toFindAccessibilityIssues` when checking if a component has accessibility issues.

```javascript
it('expect to find an accessibility issues when no alt-text is passed to component', async () => {
  await expect(render(<Image />)).toFindAccessibilityIssues();
});
```
```javascript
it('should not have accessibility issues when a good alt-text is passed in', async () => {
  await expect(render(<Image altText="Company Logo" />)).not.toFindAccessibilityIssues();
});
```

### toOnlyHaveTheseAccessibilityIssues

Use `.toOnlyHaveTheseAccessibilityIssues` when checking if a component has exactly the same issues as those expected. Pass a comma separated list of expected test names.

```javascript
it('expect to find an accessibility issues when no alt-text is passed to component', async () => {
  await expect(render(<Image />)).toOnlyHaveTheseAccessibilityIssues('Img_Name_Missing');
});
```

### toFindTheseAccessibilityIssues

Use `.toFindTheseAccessibilityIssues` when checking if a component's accessibility issues includes the issues expected. Pass a comma separated list of expected test names.

```javascript
it('expect to find an alt-text accessibility issue when no alt-text is passed to component', async () => {
  const { container } = render(<Image />);
  await expect(container).toFindTheseAccessibilityIssues('Img_Name_Missing');
});
```
```javascript
it('expect to not find an alt-text accessibility issue when an alt-text is passed to component', async () => {
  const { container } = render(<Image altText="Company Logo" />);
  await expect(container).not.toFindTheseAccessibilityIssues('Img_Name_Missing');
});
```

### toMatchAccessibilityReportSnapshot

Use `.toMatchAccessibilityReportSnapshot` to take a [snapshot](https://jestjs.io/docs/snapshot-testing) of the accessibility report and compare it to the previously stored snapshot.

```javascript
it('expect match snapshot when a good alt-text is passed to component', async () => {
  await expect(render(<Image altText="Company Logo" />)).toMatchAccessibilityReportSnapshot();
});
```
