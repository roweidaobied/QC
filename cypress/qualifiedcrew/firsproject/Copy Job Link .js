describe("User Recruiter and Login", () => {

    it("Recruiter", () => {
        cy.visit('https://www.qualifiedcrew.com/');

        cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();

        cy.get('input[name="email"]').type('Shadi.qazza@gmail.com');
        cy.get('input[name="password"]').type('Shadi@1234');
        
        cy.get('button[type="submit"]').should('not.be.disabled').click();

        
        cy.url().should('include', '/dashboard'); 

       
     
       // cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();

      
          
        
   //  cy.contains('span', 'Jobs').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/jobs');
      
 


// عندي اكتر من خيار 


// case 1
   /*  cy.get('tbody tr').contains('td', '682306b53db30a4462a63fc6').parent('tr').within(() => {
  cy.get('button[aria-label="Copy link"]').click();
});


cy.contains('Link copied').should('be.visible');*/

// case 2
/*cy.get('tbody tr').contains('td', '682306b53db30a4462a63fc6').parent('tr').within(() => {
  cy.contains('td', 'Sales Engineer').should('exist');
  cy.get('button[aria-label="Copy link"]').click();
 // cy.contains('Link copied').should('be.visible');
});*/


// case 3
// لو بدك تختار أكثر من واحد حسب الـ ID:
const jobIds = [
  '682306b53db30a4462a63fc6',
  '681be8884c7efdb693826a02',
  '6812a52eddec3eccaa55e882'
];

jobIds.forEach(id => {
  cy.get('tbody tr').contains('td', id).parent('tr').within(() => {
    cy.get('button[aria-label="Copy link"]').click();
   // cy.contains('Link copied').should('be.visible');
  });
});

      
            
    });
});