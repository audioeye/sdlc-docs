# Testing with the CLI

## Commands
| Command | Description |
| :------ | :--- |
| -c <br /> &#x2011;&#x2011;component | Run in component mode. This will create an empty HTML document and inject HTML into the |
| -p <br /> &#x2011;&#x2011;print&#x2011;test&#x2011;list  | This prints a list of tests that will be run |

### Scanning a page

```bash
npx aetest scan < example_inputs/document.html
```

### Output

```bash
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 16 accessibility issues
   htmlSkipToMain - count: 1
   imgTextAlt - count: 6
   linkImgTextAlt - count: 9

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
```

Once you've run a scan, the test results will be added to an HTML document at the file path specified in the output. Here is an example result:

![Example table output](/html-output-table.png)
