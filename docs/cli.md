# CLI

## Commands

### Scanning a page

```bash
aetest scan < example_inputs.document.html
```
| Command | Description |
| :------ | :--- |
| -c <br /> &#x2011;&#x2011;component | Run in component mode. This will create an empty HTML document and inject HTML into the |
| -p <br /> &#x2011;&#x2011;print&#x2011;test&#x2011;list  | This prints a list of tests that will be run |

### Output

```bash
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 3 accessibility issues
   imgTextAlt - count: 3

Full Test Results were output to /example/folder/testing-sdk-output.html

::: END AudioEye SDK CLI :::
```
