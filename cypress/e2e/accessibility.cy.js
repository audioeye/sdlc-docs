import promisify from 'cypress-promise';

describe('accessibility tests', () => {
  it('test the different docs for accessibility issues', async () => {
    cy.visit('http://localhost:3000');

    // For full page scan that uses the root element, we need to "get" something first otherwise the page won't be settled
    cy.get('[id="__docusaurus_skipToContent_fallback"]').should('exist');

    const htmlRootElement = await promisify(cy.get('html:root'));
    await expect(htmlRootElement).to.onlyHaveTheseAccessibilityIssues(
      'Html_Name_Redundant',
      'BadTag_Emphasis_Detect',
      'BadTag_Presentational_Detect',
      'Svg_Name_Missing',
      'FormField_Name_Missing',
      'Link_Name_Redundant',
      'Html_Possible_Heading',
    );
  });
});
