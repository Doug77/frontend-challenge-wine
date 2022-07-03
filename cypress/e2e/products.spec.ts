
describe('Test app page products', () => {
  it('When visiting the homepage, you will be redirected to the product page', () => {
    cy.visit('http://localhost:3000/');

    cy.url().should('be.equal', 'http://localhost:3000/products/1');
  });

  it('Check if there are products on the page', () => {

    cy.get('[data-testid="cards-products"').should('be.visible');
    cy.get('[data-testid="btn-add-to-cart"]').should('be.visible');
  })

  it('Must be redirected to product details page', () => {

    cy.get('[data-testid="btn-add-to-cart"]').first().click();
    cy.url().should('be.equal', 'http://localhost:3000/details/0');
  })

  it('Check if it is possible to go to the next page and return to the previous one', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cards-products"').should('be.visible');

    cy.get('[data-testid="btn-next-page"]').should('be.visible');
    cy.get('[data-testid="btn-next-page"]').click();

    cy.url().should('be.equal', 'http://localhost:3000/products/2');

    cy.get('[data-testid="btn-previous-page"]').should('be.visible');
    cy.get('[data-testid="btn-previous-page"]').click();

    cy.url().should('be.equal', 'http://localhost:3000/products/1');
  })

  it('Checks if it is possible to go to a specific page', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cards-products"]').should('be.visible');

    cy.get('[data-testid="btn-number-page-4"]').should('be.visible');
    cy.get('[data-testid="btn-number-page-4"]').click();

    cy.url().should('be.equal', 'http://localhost:3000/products/4');
  });

  it('Check if it is possible to filter by price', () => {
    cy.visit('http://localhost:3000/');

    cy.get('[data-testid="cards-products"').should('be.visible');

    cy.get('[data-testid="filter-price-1"]').should('be.visible');
    cy.get('[data-testid="filter-price-2"]').should('be.visible');
    cy.get('[data-testid="filter-price-3"]').should('be.visible');
    cy.get('[data-testid="filter-price-4"]').should('be.visible');
    cy.get('[data-testid="filter-price-5"]').should('be.visible');
    'products-not-found'

    cy.get('[data-testid="filter-price-1"]').click();

    cy.get('[data-testid="products-not-found"]').should('be.visible');
    cy.get('[data-testid="link-to-back"]').should('be.visible');

    cy.get('[data-testid="link-to-back"]').click();

    cy.url().should('be.equal', 'http://localhost:3000/products/1');
  });
})
