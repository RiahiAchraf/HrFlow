describe('E2E - FILTERS', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should confirm the filter is working', () => {
    const searchTerm = 'Engineer';

    cy.step('Should confirm searching by search term ');
    cy.getData('search-input').type(searchTerm);
    cy.getData('search-input').should('have.value', searchTerm);

    cy.get('[data-test="list-items"] li').each((listItem) => {
      // Get the text content of the list item
      cy.step('Should confirm the filtered list contains the search term');
      cy.wrap(listItem).find('[data-test="job-name"]').contains(searchTerm, { matchCase: false });
    });
  });
});
