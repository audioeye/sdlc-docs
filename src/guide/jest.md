# Jest Library

The AudioEye Testing SDK Jest Library gives you the ability to write Jest tests to  test components of your project.

## Pre-requisites
xxx

## Installing the library
xxx

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
it('should find accessibility issues', async () => {
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
