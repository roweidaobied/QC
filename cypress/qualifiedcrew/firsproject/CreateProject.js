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

     cy.contains('span', 'Projects').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/projects/new');
     
     cy.get('input[name="name"]').type(' Project Management System');
   
      cy.wait(500)  
 /*cy.get('.MuiInputBase-root').then($items => {
        for (let i = 0; i < $items.length; i++) {
          cy.wrap($items[i]).click();
        }

        cy.wait(500);

        cy.get('ul[role="listbox"] li').contains('TechNova Solutions').click({ force: true });
     });*/
    cy.get('.MuiAutocomplete-popupIndicator').eq(0).click();

cy.get('ul[role="listbox"]', { timeout: 5000 }).should('be.visible');
cy.get('ul[role="listbox"] li').contains('TechNova Solutions').click();



      cy.wait(500)
      // start date
    cy.get('[data-testid="CalendarIcon"]').eq(0).click();
 cy.get('button[aria-label="Next month"]').click();
cy.contains('button', '23').click({ force: true });

// end date
       cy.get('[data-testid="CalendarIcon"]').eq(1).click();

for(let i = 0; i < 6; i++) {
  cy.get('button[aria-label="Next month"]').first().click();
  cy.wait(500);
}

cy.contains('button', '25').click({ force: true }); // جرب 0 أو 1 حسب اللي بدك اياه
//cy.contains('button', /^25$/).should('be.visible').click({ force: true });

/*cy.get('[data-testid="CalendarIcon"]').eq(1).click();

// نعمل 4 مرات next month
for (let i = 0; i < 6; i++) {
  cy.get('button[aria-label="Next month"]').click();
  cy.wait(300);
}

// نختار يوم 25 مثلاً
cy.contains('button', '2').eq(1).click({ force: true });*/

// Project description
      cy.get('[data-placeholder="Project description"]').type('CodeCrafters Inc is launching an advanced internal project management system tailored for IT teams. The platform enables streamlined planning, tracking, and delivery of software development projects. Key features include creating projects with start and end dates, assigning team members, setting milestones, tracking task progress, and managing deadlines through an interactive calendar view. The system supports real-time collaboration, notifications, and detailed analytics, empowering the company to improve productivity, transparency, and delivery speed across teams.');
      cy.wait(500)
     // cy.get('input[name="active"]').click();
      //cy.get('input[name="share_entity"]').click();

      cy.wait(500)

     // cy.contains('button', 'Create').click();
//cy.get('button.MuiButton-containedPrimary').click();
cy.get('button.MuiButton-containedPrimary').contains('Create').click();


      cy.visit('https://www.qualifiedcrew.com/dashboard/projects');
    });
});
       