describe("User and Recruiter and Login",()=>{

    it("Recruiter  ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('naseerob74@gmail.com');
         cy.get('input[name="password"]').type('Admin@123');
         cy.get('button[type="submit"]').click();

         cy.get('.MuiDialogContent-root > .MuiStack-root > .css-i9gxme > .MuiBox-root > .MuiButtonBase-root').click();
        
         
         cy.get('input[name="current_company"]').type("TechVerse");
         cy.get('input[name="job_position"]').type("Maneger");
       
        cy.get('input[name="country"]').click(); 
        cy.contains('li', 'Jordan').click(); 
         cy.get('input[name="country"]').should('have.value', 'Jordan');
        
       /*  cy.get('select#my-dropdown option').then($options => {
            const optionValues = [...$options].map(o => o.value);  // get all values into array
            const randomValue = optionValues[Math.floor(Math.random() * optionValues.length)];
            cy.get('select#my-dropdown').select(randomValue);      //this is for loop 
          });*/
          
          cy.get('input[name="phone"]').type("799617816");
     
          cy.get('button[type="button"]').click(); 
          
    });
      
     
  








});



