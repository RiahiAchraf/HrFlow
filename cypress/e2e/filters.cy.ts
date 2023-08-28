describe('E2E - FILTERS', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should confirm the filter is working', () => {
    cy.step('Should confirm search filter');

    cy.getData('search-input').type('engineer');
    cy.getData('search-input').should('have.value', 'engineer');
  });
});
