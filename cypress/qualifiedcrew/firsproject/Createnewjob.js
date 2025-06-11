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

     cy.contains('span', 'Jobs').click({ force: true });
     cy.wait(500)
     cy.visit('https://www.qualifiedcrew.com/dashboard/jobs/new');
       
   

     cy.get('input[name="title"]').type('Project Maneger');
   //  cy.get('input[name="email"]').type('roweidaobaid@gmail.com');


     cy.get('input[name="project"]').click(); 
     cy.contains('li', ' Project Management System').click(); 
      cy.get('input[name="project"]').should('have.value', ' Project Management System');
      cy.wait(500) 
      
      // Experience From
// Experience From (input with id :r6:)
cy.get('#\\:r6\\:')
  .clear()
  .type('2 years');

cy.contains('li', '2 years').click();

cy.wait(500);

// Experience To (input with id :r8:)
cy.get('#\\:r8\\:')
  .clear()
  .type('8 years');

cy.contains('li', '8 years').click();
///////////////////




/////////////////
     // Deadline
    cy.get('[data-testid="CalendarIcon"]').eq(0).click();
 cy.get('button[aria-label="Next month"]').click();
cy.contains('button', '23').click({ force: true });



/////////////////

      cy.get('input[name="location"]').click(); 
     cy.contains('li', 'Saudi Arabia').click(); 
      cy.get('input[name="location"]').should('have.value', 'Saudi Arabia');
      cy.wait(500)
      cy.get('input[name="address"]').type('Riyadh');

      cy.wait(500)


/*cy.get('input[name="education_level"]').click(); 
     cy.contains('li', 'Bachelors Degree').click(); 
      cy.get('input[name="education_level"]').should('have.value', 'Bachelors Degree');
      cy.wait(500)*/
      
cy.get('input[name="education_level"]').click();
cy.wait(500); // للتأكد أن القائمة ظهرت

cy.get('ul[role="listbox"] li')
  .contains("Bachelor's Degree")
  .should('be.visible')
  .click();

cy.get('input[name="education_level"]')
  .should('have.value', "Bachelor's Degree");

  
   
//workplace
cy.get('input[name="workplace"]').scrollIntoView().click({ force: true });
cy.wait(500);
cy.get('ul[role="listbox"] li').contains('On-site').click({ force: true });
cy.get('input[name="workplace"]').should('have.value', 'On-site');



///////////

 cy.get('input[name="salary_range"]').click();

cy.get('input[name="salary"]').type('12000');

cy.get('input[name="max_salary"]').type('14000');

cy.get('input[name="salary_currency"]').then(($input) => {
 
  cy.wrap($input).click();



  cy.get('button[aria-label="Open"]').click({ force: true });

  
  cy.wait(300);

  // نختار SAR - Saudi Riyal من القائمة
  cy.get('ul[role="listbox"] li').contains('SAR - Saudi Riyal').click({ force: true });
});
const skills = [
  'Communication',
  'Leadership',
  'Teamwork',
  'Time Management',
  'Creativity',
  'Decision Making',
  'Analytical Skills'
];

skills.forEach(skill => {
  cy.get('input[name="tags"]').click({ force: true });

  
  cy.wait(500);

  
  cy.get('ul[role="listbox"] li').contains(skill).click({ force: true });

  
  cy.wait(200);
});

cy.contains('button', 'Create Questions').click();
//حسب 
cy.get('input[name="is_screening"]').click();

 cy.get('input[name="title"]').type('How do you ensure that a project stays within budget and on schedule?');

cy.get('#question-type-field').click();


cy.contains('li', 'Text').click();

// اضغط زر Save Question
cy.get('button').contains('Save Question').click();

////////////////////////



cy.contains('button', 'Create Questions').click();
//حسب 
cy.get('input[name="is_screening"]').click();

 cy.get('input[name="title"]').type('What tools and software do you use for project management? ');

cy.get('#question-type-field').click();
cy.contains('li', 'Multiple Choice').click();
cy.get('button').contains('Add').click();


cy.get('input.MuiInputBase-input').last().type('Microsoft Project');


cy.get('button').contains('Add').click();


cy.get('input.MuiInputBase-input').last().type('Jira');


cy.get('button').contains('Add').click();
cy.get('input.MuiInputBase-input').last().type('Trello');

cy.get('button').contains('Save Question').click();

//////////////////////




      cy.get('[data-placeholder="Job description"]').type(`Leads the entire project lifecycle—from planning and design through procurement, construction, and final handover. Responsibilities:

Manages budgets, timelines, contracts, and stakeholder expectations.

Coordinates between owners, engineers, contractors, and regulatory bodies.

Handles risk management, reporting, and decision-making on-site and off-site. Key Skills: Leadership, contract negotiation, scheduling tools (Primavera, MS Project), conflict resolution.`);

      cy.wait(500)
      //cy.get('input[name="is_project_private"]').click();

     //cy.get('input[name="is_company_private"]').click();
   // cy.get('input[name="published"]').click();
   // cy.get('input[name="resume_required"]').click();
   // cy.get('input[name="video_required"]').click();
    //cy.get('input[name="share_entity"]').click();
    

      cy.wait(500)
     cy.get('button#\\:rp3\\:').click();
//cy.contains('button', 'Create').click();

      cy.visit('https://www.qualifiedcrew.com/dashboard/jobs');
    });
});