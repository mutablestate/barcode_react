context('BarcodeEditor:workflow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  });

  it('can create a 19 digit barcode with selected colors', () => {
    // INITIAL STATE
    cy.get('[data-test="BarcodeInput:status"]').contains(
      'Enter up to 19 digits.'
    );
    cy.get('[data-test="ColorInput:select:primaryColor"]').contains('Red');
    cy.get('[data-test="ColorInput:select:secondaryColor"]').contains('Green');

    // ACTION
    // input 19 digits
    cy.get('[data-test="BarcodeInput:input"]')
      .type('0123456789012345678')
      .should('have.value', '0123456789012345678');
    // select new primaryColor
    cy.get('[data-test="ColorInput:select:primaryColor"]').select('Blue');
    // select new secondaryColor
    cy.get('[data-test="ColorInput:select:secondaryColor"]').select('Purple');

    // ASSERTION
    // updated status text
    cy.get('[data-test="BarcodeInput:status"]').contains(
      '19 digits given (maximum 19) and the checksum digit is 9.'
    );
    // updated barchart contains 19 blue bars + 1 purple checksum bar
    cy.get('[data-test="BarcodeChart:Bar:div:blue"]').should('have.length', 19);
    cy.get('[data-test="BarcodeChart:Bar:div:purple"]').should(
      'have.length',
      1
    );
  });
});
