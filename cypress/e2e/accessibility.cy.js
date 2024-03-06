describe('accessibility tests', () => {
  it('test the landing page for accessibility issues', () => {
    cy.visit('http://localhost:3000');

    // For full page scan that uses the root element, we need to "get" something first otherwise the page won't be settled
    cy.get('[id="__docusaurus_skipToContent_fallback"]').should('exist');

    cy.title().should('include', 'Introduction');

    cy.get('html:root').then((element) => {
      expect(element).not.to.findTheseAccessibilityIssues('Img_Name_Missing');

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
  });

  [
    { page: 'get-started', title: 'Getting Started' },
    { page: 'cli', title: 'Testing with the CLI' },
    { page: 'jest', title: 'Testing With Jest' },
    { page: 'cypress', title: 'Testing With Cypress' },
    { page: 'about_our_rules', title: 'About Our Rules' },
    { page: 'how-our-tests-work', title: 'Issue Detail Output' },
    { page: 'troubleshooting', title: 'Troubleshooting' },
    { page: 'release-notes', title: 'Release Notes' },
  ].forEach(({ page, title }) => {
    it(`test the ${page} page for accessibility issues`, () => {
      cy.visit(`http://localhost:3000/${page}`);
      cy.title().should('include', title);

      // For full page scan that uses the root element, we need to "get" something first otherwise the page won't be settled
      cy.get('[id="__docusaurus_skipToContent_fallback"]').should('exist');

      cy.get('html:root').then((element) => {
        expect(element).to.findAccessibilityIssues();
        expect(element).not.to.findTheseAccessibilityIssues('Img_Name_Missing');
      });
    });
  });
});
