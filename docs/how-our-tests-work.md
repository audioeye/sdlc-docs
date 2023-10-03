# Issue Detail Output

**TODOs**
- Add a setup paragraph here
- Fix describe function info (or details around it?)

## HTML Output

```bash
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 0 accessibility issues

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
```
You can easily find details about each of these failure details in the HTML output file. Here is an example result:

![Example table output](/html-output-table.png)

When a failure is returned, we will provide you the following information:

- **Unique issue identifier** – A way to track each individual issue in project management tools.
- **Rule Code and Result Code** – The result code indicates the specific issue was discovered by a parent rule (test). A rule can detect more than one issue (result).
- **Rule Name** – The name of the rule (test) that was run.
- **Rule Description** – A description of what the rule (test) checks for.
- **WCAG success criterion (number + name)** – The corresponding WCAG criteria for each rule.
- **Result Description** - A description of the issue discovered, based on how and why the rule (test) failed.
- **Fix advice (plain text)** - Explanation of how to fix the issue.
- **Fix (code snippet)** - Generic code example of how to fix the issue.
- **Source** – Where in source code the issue occurred.

## JSON Output

If you're prefer to work with JSON, you can use the `-t` flag to output the results in JSON format.

```bash
npx aetest scan < example_inputs/component.html -c -t json

::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 3 accessibility issues
   imgTextAlt - count: 3

JSON file saved to /Users/rhigdon/Code/testing-sdk/packages/testing-sdk-cli/aetest_output.json

::: END AudioEye SDK CLI :::
```

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
