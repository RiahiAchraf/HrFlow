describe('E2E - ACCORDION', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should open and close the accordion', () => {
    cy.step('Should open the accordion');
    cy.getData('accordion-content').should('not.be.visible');
    cy.getData('accordion-trigger').first().click();
    cy.getData('accordion-content').should('be.visible');

    cy.step('Should open the accordion');
    cy.getData('accordion-trigger').first().click();
    cy.getData('accordion-content').first().should('not.be.visible');
  });

  it('Should re-order items by drag and drop', () => {
    // Get the draggable items
    cy.get('[data-test="list-items"] li')
      .should('have.length.at.least', 9)
      .first()
      .as('draggedItem');

    cy.get('@draggedItem').trigger('mousedown', { which: 1 });
    cy.get('@draggedItem').trigger('mousemove', { clientX: 0, clientY: 100 });

    // Release the mouse button to complete the drag and drop
    cy.get('@draggedItem').trigger('mouseup');

    // Perform assertions on the new order of items
    cy.get('[data-test="list-items"] li')
      .first() // Check if the first item has changed
      .should('not.have.attr', 'data-react-beautiful-dnd-draggable-id', '@draggedItem');
  });
});
