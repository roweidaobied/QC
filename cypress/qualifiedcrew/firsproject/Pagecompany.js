describe("User Recruiter and Login", () => {

    it("Recruiter", () => {
        cy.visit('https://www.qualifiedcrew.com/');

        cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();

        cy.get('input[name="email"]').type('naseerob74@gmail.com');
        cy.get('input[name="password"]').type('Admin@123');
        
        cy.get('button[type="submit"]').should('not.be.disabled').click();

        
        cy.url().should('include', '/dashboard'); 

        // Close dialog if appears
        // cy.get('.MuiDialogContent-root .MuiButtonBase-root').click({ force: true });
       
     
        cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();

      //  cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');

     // cy.contains('span', 'Companies').click();
      //cy.contains('span', 'Companies').click({ force: true });
          
        
     cy.contains('span', 'Companies').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');

            
    });
});