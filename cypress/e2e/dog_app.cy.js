describe('Dog Breed App', () => {
  beforeEach(() => {
    // 1. SET UP ALL INTERCEPTS FIRST
    // Mock the list of breeds
    cy.intercept('GET', 'https://dog.ceo/api/breeds/list/all', {
      body: { message: { "african": []} }
    }).as('getBreeds');
    
    // Mock the specific breed image (using a wildcard * is safer!)
    cy.intercept('GET', 'https://dog.ceo/api/breed/*/images/random', (req) => {
      // This logic dynamically returns an image based on the breed in the URL
      const breed = req.url.split('/')[5]; 
      req.reply({
        body: { message: `https://images.dog.ceo/${breed}.jpg` }
      });
    }).as('getDogImage');
    
    // 2. NOW VISIT THE APP
    cy.visit('http://localhost:3000'); 
  });

  it('displays the list of breeds and allows selection via typing', () => {

    cy.wait('@getBreeds');

    cy.get('button').contains('african').should('be.visible');
    // cy.get('button').contains('dingo').should('be.visible')

    cy.get('[data-test="dog-input"]').clear().type("african");

    cy.wait('@getDogImage');
    
    cy.get('[data-test="dog-selected"]').contains("african")
    
    cy.get('img').should('have.attr', 'src', 'https://images.dog.ceo/african.jpg');
   
  });

    it('displays nothing when a breed is not available via typing', () => {

    cy.wait('@getBreeds');

    cy.get('button').contains('african').should('be.visible');

    cy.get('[data-test="dog-input"]').clear().type("afr");
    
    cy.get('[data-test="dog-selected"]').should('not.exist');
    cy.get('[data-test="dog-selected-not-found"]').contains('Not found, try another bread :/').should('be.visible');

  });


  it('updates the view when a breed button is clicked', () => {
    cy.wait('@getBreeds')

    cy.get('button').contains('african').click()

     cy.wait('@getDogImage');

      cy.get('[data-test="dog-selected"]').contains('african').should('be.visible')

      cy.get('img').should('have.attr', 'src', 'https://images.dog.ceo/african.jpg')
  });
});










