# Test Outputs

NOTE: Update this section to cover the following
- Summary output (count + result codes)
- Per-issue detail output in JSON format (can convert to csv)

For each test run, you will be informed if your site passed or failed for each issue that we looked for in that specific test suite.

- A **“pass”** is defined as code DID match the expected pattern/assertion defined in the test.
- A **“failure”** is defined as code DID NOT match the expected pattern/assertion defined in the test.

```bash
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 0 accessibility issues

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
```

When a failure is returned, we will provide you the following information:
- **Unique issue identifier** – Can be used to track the issue in project management tools.
- **Issue Code** – The name of the rule that discovered the issue.
- **Issue name** – Description of the issue.
- **WCAG success criterion (name + number)** – What WCAG criteria was being tested
- **Description** - Explanation of the WCAG criterion with example code on how to properly implement.
- **Source** – Where the issue occurred.
<!-- - **Fix advice (plain text)** - Explanation of the issue discovered.
- **Fix (code snippet)** - Code example on how to fix the issue. -->

You can easily find details about each of these failure details in the HTML output file. Here is an example result:

![Example table output](/html-output-table.png)

## Describing a rule
If you need more details about a specific rule, you can use the `describe` command to get more information.

```bash
npx aetest describe imgTextAlt
```

### Describe Output

```bash
{
  code: 'imgTextAlt',
  fullName: 'Providing a Short Text Alternative for Images',
  description: '<p>All <code>img</code> elements must have an "alt" attribute to identify and describe visual information conveyed. Decorative or non-informational images may have an empty "alt" so that Screen Readers can skip or ignore them, but the attribute must still be present.</p><h4>Sample Code</h4><pre>&lt;img src="picture.jpg" alt="A meaningful alt tag for this image."&gt;</pre>',
  wcagSuccessCriteriaNumber: '1.1.1',
  wcagSuccessCriteriaName: 'Non-Text Content'
}
```
