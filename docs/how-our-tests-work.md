# Issue Detail Output

There are two formats you can use to understand what issues have been detected in your code: An HTML output file that displays information in a formatted table and a JSON output that can be converted into other file types (.CSV, .XLSX, etc).

## HTML Output

```bash
% npx aetest scan < document.html
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 7 accessibility issues
   Html_SkipLink_Missing - count: 1
   Img_Name_Missing - count: 6

Full Test Results were output to testing-sdk/aetest_output.html

::: END AudioEye SDK CLI :::
```

You can easily find details about each of these failure details in the HTML output file. Here is an example result:

![Example table output](/html-output-table.png)

When a failure is returned, we will provide you the following information for all issues:

- **Number** – A number identifying this issue in the report
- **Rule Name** – The name of the rule that was run.
- **WCAG Level** - The WCAG conformance level for the issue detected
- **WCAG success criterion (number + name)** – The corresponding WCAG criteria for each rule.

In addition by clicking **View Details** on an issue you will have access to the following additional information:

- **Rule Code** – The rule code indicates the specific issue that was discovered.
- **Element Location** – The HTML element for which this issue occurred.
- **Description** – A description of what the rule checks for.
- **How to fix** - Explanation of how to fix the issue.

## JSON Output

If you're prefer to work with JSON, you can use the `-t` flag to output the results in JSON format.

```bash
% npx aetest scan -c -t json < component.html
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN

Found 3 accessibility issues
   Img_Name_Missing - count: 3

JSON file saved to testing-sdk/aetest_output.json

::: END AudioEye SDK CLI :::
```

## Understanding Rules
Depending on whether you run with the ``--component`` flag (the only option during Jest testing) or you are running a full page scan, the set of accessibility rules that will be run is slightly different.  Not all rules apply to individual html components, and visa-versa some issues can only be detected during a full page scan.  To see what tests are being run use the `--print-test-list` flag on the CLI when running a scan.

```bash
% npx aetest scan --component --print-test-list < component.html
::: START AudioEye SDK CLI :::

Scanning HTML from STDIN
The following rules were run...
   Aria_Attribute_Invalid
   Aria_DescribedBy_Invalid
   Aria_Label_TextContent_MisMatch
   Aria_LabelledBy_Invalid
   Aria_Role_AttributeRequirement_Missing
   Aria_Role_ChildElem_Missing
   Aria_Role_Invalid
   Aria_Role_ParentElem_Missing
   Audio_Controls_Missing_review
   Button_Name_Missing
   Button_Name_WeakName
   FormField_Autocomplete_Invalid
   FormField_Autocomplete_MisMatch_review
   FormField_Autocomplete_Missing
   FormField_Autocomplete_Multiple
   FormField_ContextChange_Detect_review
   FormField_ErrorHandle_Missing_review
   FormField_Name_Missing
   FormField_Name_WeakName
   FormImportant_ErrorHandle_Missing_review
   Heading_Name_Empty
   Heading_Sequence_Wrong
   Html_Blockquote_Cite_Invalid
   Html_Element_ID_Duplicate
   Html_Name_Redundant
   Html_Possible_Heading_review
   Html_Zoom_ScrollReflow_Found_review
   HtmlList_ChildElem_LI_Missing
   HtmlList_Definition_ChildElem_Missing
   HtmlList_Definition_ParentDL_Missing
   Iframe_Name_Duplicate
   Iframe_Name_Missing
   Iframe_Name_Redundant
   Iframe_Name_WeakName
   Img_Name_Missing
   Img_Name_ShouldBe_Empty_review
   Link_AdjacentHref_Redundant
   Link_AnchorTarget_Invalid
   Link_Href_Missing
   Link_Name_Missing
   Link_Name_Redundant
   Link_Name_WeakName
   Modal_Control_Detect_review
   Modal_Usage_Cookie_Detect_review
   Modal_Usage_Detect_review
   Svg_Name_Missing
   Table_Caption_Missing
   Table_Caption_Summary_Redundant
   Table_Header_Empty
   Table_Header_Missing
   Text_LetterSpacing_Detect
   Text_Size_TooSmall_review

Total rules run: 52


Found 3 accessibility issues
   Img_Name_Missing - count: 3

Full Test Results were output to testing-sdk/aetest_output.html

::: END AudioEye SDK CLI :::
```
## Describing a Rule

If you need more details about a specific issue, you can use the `describe` command to get more information. For instance, for the result `Img_Name_Missing` you can find more information by running:

```bash
% npx aetest describe Img_Name_Missing
{
  code: 'Img_Name_Missing',
  fullName: 'Image accessible name is missing',
  description: "We detected an image that is missing an accessible name. if the image is unimportant or decorative, provide an empty-alt attribute as in the following: `alt=''`. If the image needs announcing to screen-readers, add an appropriate alt-attribute or related ARIA property to provide an accessible name.",
  wcagSuccessCriteriaNumber: '1.1.1',
  wcagSuccessCriteriaName: 'Non-Text Content',
  wcagSuccessCriteriaLevelCode: 'A',
```
