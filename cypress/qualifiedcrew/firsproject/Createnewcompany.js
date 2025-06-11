describe("User Recruiter and Login", () => {

    it("Recruiter", () => {
        cy.visit('https://www.qualifiedcrew.com/');

        cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();

        cy.get('input[name="email"]').type('naseerob74@gmail.com');
        cy.get('input[name="password"]').type('Admin@123');
        
        cy.get('button[type="submit"]').should('not.be.disabled').click();

        
        cy.url().should('include', '/dashboard'); 
      //3 شحطات 
        cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();

     cy.contains('span', 'Companies').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts/new');
       
    //cy.get('.MuiAvatar-circular').attachFile('download.jpg')
     cy.get('.MuiBox-root>#file-input').attachFile('download.jpg')

     cy.get('input[name="name"]').type('CodeCrafters ');
   //  cy.get('input[name="email"]').type('roweidaobaid@gmail.com');


     cy.get('input[name="industry"]').click(); 
     cy.contains('li', 'Architectural and Structural Metal Manufacturing').click(); 
      cy.get('input[name="industry"]').should('have.value', 'Architectural and Structural Metal Manufacturing');
      cy.wait(500)   
      cy.get('input[name="country"]').click(); 
     cy.contains('li', 'Saudi Arabia').click(); 
      cy.get('input[name="country"]').should('have.value', 'Saudi Arabia');
      cy.wait(500)
      cy.get('input[name="website"]').type('https://www.CodeCraftersInc.com');

      cy.wait(500)
      cy.get('.MuiInputBase-root').then($items => {
        for (let i = 0; i < $items.length; i++) {
          cy.wrap($items[i]).click();
        }

        cy.wait(500);
        cy.get('ul[role="listbox"] li').contains('51-200').click({ force: true });
      });

      cy.get('[data-placeholder="Company Bio"]').type('Experts in building web and mobile apps using modern frameworks');
      cy.wait(500)
      cy.get('input[name="share_entity"]').click();
      cy.wait(500)
      cy.get('button[type="submit"]').click();
      cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');
    });
});