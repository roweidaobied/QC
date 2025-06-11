describe("User Recruiter and Login", () => {

    it("Recruiter", () => {
        cy.visit('https://www.qualifiedcrew.com/');

        cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();

        cy.get('input[name="email"]').type('naseerob74@gmail.com');
        cy.get('input[name="password"]').type('Admin@123');
        
        cy.get('button[type="submit"]').should('not.be.disabled').click();

        
        cy.url().should('include', '/dashboard'); 

       
     
        cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();

      
          
        
     cy.contains('span', 'Jobs').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/jobs');

            
    });
});