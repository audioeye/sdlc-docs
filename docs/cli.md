# Testing with the CLI


## Scanning

```bash
npx aetest scan < example_inputs/document.html
```
By default, the CLI will expect a document to be a complete HTML document. If you are scanning a component, you can use the `-c` flag to run in component mode.

### Scan Output

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
### Scanning Components
```bash
npx aetest scan < example_inputs/component.html -c
```

### Option Flags for Scanning
| Option | Description |
| :------ | :--- |
| -c<br /> &#x2011;&#x2011;component | Run in component mode (create a document and inject the HTML) |
| -p<br /> &#x2011;&#x2011;print&#x2011;test&#x2011;list  | This prints a list of tests that will be run |
| -d<br /> &#x2011;&#x2011;debug | Internal Use only (Don't build off of this!) |
| -j<br /> &#x2011;&#x2011;json | Output results in JSON format |
| -o<br /> &#x2011;&#x2011;output <html_filename> | Define the filename for test results HTML output file |
| -h<br /> &#x2011;&#x2011;help | Display help for a command |






Once you've run a scan, the test results will be added to an HTML document at the file path specified in the output. Here is an example result:

![Example table output](/html-output-table.png)
