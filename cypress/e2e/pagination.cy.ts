describe('E2E - PAGINATION', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should be able to update the pagination page', () => {
    cy.step('Should be able to update the pagination limit');
    cy.getData('select-limit').click();

    cy.getData('limit-content')
      .find('[data-test="limit-item"]')
      .then((firstItem) => {
        const firstItemValue = firstItem.first().text();

        cy.step('Should select the first category');
        cy.getData('limit-item').first().contains(firstItemValue).click();

        cy.step('Assert that the selected category is displayed correctly');
        cy.getData('select-limit').contains(firstItemValue);
      });

    cy.step('Should display 3 pages');
    cy.getData('pagination-items').find('[data-test="pagination-item"]').should('have.length', 3);

    cy.step('Back button should be disabled by default');
    cy.getData('back-button').should('have.class', '!cursor-not-allowed');

    cy.step('Should move to the last page');
    cy.getData('pagination-items').find('[data-test="pagination-item"]').last().click();

    cy.step('Next button should be disabled by default');
    cy.getData('next-button').should('have.class', '!cursor-not-allowed');
  });
});
