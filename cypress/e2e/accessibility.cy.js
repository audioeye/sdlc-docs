describe('accessibility tests', () => {
  it('test the different docs for accessibility issues', () => {
    cy.visit('http://localhost:3000');

    // For full page scan that uses the root element, we need to "get" something first otherwise the page won't be settled
    cy.get('[id="__docusaurus_skipToContent_fallback"]').should('exist');

    cy.title().should('include', 'Introduction');

    cy.get('html:root').then((element) => {
      expect(element).to.onlyHaveTheseAccessibilityIssues(
        'Html_Name_Redundant',
        'BadTag_Emphasis_Detect',
        'BadTag_Presentational_Detect',
        'Svg_Name_Missing',
        'FormField_Name_Missing',
        'Link_Name_Redundant',
        'Html_Possible_Heading',
      );
    });

    cy.get('ul.theme-doc-sidebar-menu').should('exist').find('a[href*="get-started"]').click();

    cy.title().should('include', 'Getting Started');

    cy.get('html:root').then((element) => {
      expect(element).to.onlyHaveTheseAccessibilityIssues(
        'Aria_Role_AttributeRequirement_Missing',
        'BadTag_Emphasis_Detect',
        'BadTag_Presentational_Detect',
        'FormField_Name_Missing',
        'Html_Name_Redundant',
        'Html_Possible_Heading',
        'Img_Name_Missing',
        'Link_Name_Redundant',
        'Link_Name_WeakName',
        'Svg_Name_Missing',
        'Text_Contrast_TooLow',
      );
    });
  });
});
