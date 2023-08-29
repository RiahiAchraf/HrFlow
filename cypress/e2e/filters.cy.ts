describe('E2E - FILTERS', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should confirms search, filter, sort and reset filters', () => {
    const searchTerm = 'Engineer';

    cy.step('Should confirm searching by search term ');
    cy.getData('search-input').type(searchTerm);
    cy.getData('search-input').should('have.value', searchTerm);

    cy.step('Should confirm the filtered list contains the search term');
    cy.get('[data-test="list-items"] li').each((listItem) => {
      // Get the text content of the list item
      cy.wrap(listItem).find('[data-test="job-name"]').contains(searchTerm, { matchCase: false });
    });

    // Clear the input value
    cy.getData('search-input').clear();

    cy.step('Should confirms select by the job category filter');
    cy.getData('select-category').click();

    cy.getData('category-content')
      .find('[data-test="category-item"]')
      .then((firstItem) => {
        const firstItemValue = firstItem.first().text();

        cy.step('Should select the first category');
        cy.getData('category-item').first().contains(firstItemValue).click();

        cy.step('Assert that the selected category is displayed correctly');
        cy.getData('select-category').contains(firstItemValue);
      });

    cy.step('Should confirms sort by filter');
    cy.getData('select-sort-by').click();

    cy.getData('sort-by-content')
      .find('[data-test="sort-by-item"]')
      .then((firstItem) => {
        const sortByDate = firstItem.first().text();
        const sortByName = firstItem.eq(1).text();
        const sortByCategory = firstItem.last().text();

        cy.step('Should sort by date');
        cy.getData('sort-by-item').first().contains(sortByDate).click();

        cy.step('Assert that the date sort is displayed correctly');
        cy.getData('select-sort-by').contains(sortByDate);

        cy.step('Should sort by name');
        cy.getData('select-sort-by').click();
        cy.getData('sort-by-item').eq(1).contains(sortByName).click();

        cy.step('Assert that the name sort is displayed correctly');
        cy.getData('select-sort-by').contains(sortByName);

        cy.step('Should sort by category');
        cy.getData('select-sort-by').click();
        cy.getData('sort-by-item').last().contains(sortByCategory).click();

        cy.step('Assert that the category sort is displayed correctly');
        cy.getData('select-sort-by').contains(sortByCategory);
      });

    cy.step('Should reset filters');
    cy.getData('reset-button').click();
    cy.getData('select-category').contains('Select a category');
    cy.getData('select-sort-by').contains('Sort by');
    cy.getData('search-input').should('have.attr', 'placeholder', 'Search by job name');
  });
});
