describe('E2E - PAGINATION', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should go to the next page', () => {
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
  });
});
