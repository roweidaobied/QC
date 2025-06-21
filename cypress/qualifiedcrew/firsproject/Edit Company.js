/*describe("Company Edit Page Test", () => {

  it("Should open the selected company's Edit page", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    // Login
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    // Open Companies page
    //cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    //cy.contains('span', 'Companies').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');

    // Click Edit for a specific company (index 2)
    cy.get(`a[href*="/dashboard/company-accounts/edit"]`).eq(2).click();
    cy.url().should('include', '/edit');

  });

});*/
describe("Company Edit Page Test", () => {

  it("Should open the selected company's Edit page", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    // Login
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    // Open Companies page
   cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Companies').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');

    // اضغط على زر التلات شحطات للشركة المطلوبة (مثلا رقم 2)
    cy.get('button[aria-haspopup="true"]').eq(2).click();

    // اضغط على Edit من القائمة
    cy.contains('a', 'Edit').click();

    // تأكد انك دخلت صفحة Edit
    cy.url().should('include', '/edit');

 //cy.get('.MuiBox-root>#file-input').attachFile('download.jpg')

     cy.get('input[name="name"]').type('AdminPro Solutions ');
   //  cy.get('input[name="email"]').type('roweidaobaid@gmail.com');


     cy.get('input[name="industry"]').click(); 
     cy.contains('li', 'Administrative and Support Services').click(); 
      cy.get('input[name="industry"]').should('have.value', 'Administrative and Support Services');
      cy.wait(500)   
      cy.get('input[name="country"]').click(); 
     cy.contains('li', 'Saudi Arabia').click(); 
      cy.get('input[name="country"]').should('have.value', 'Saudi Arabia');
      cy.wait(500)
      cy.get('input[name="website"]').type('https://www.AdminProSolutions.com');

      cy.wait(500)
      cy.get('.MuiInputBase-root').then($items => {
        for (let i = 0; i < $items.length; i++) {
          cy.wrap($items[i]).click();
        }

        cy.wait(500);
        cy.get('ul[role="listbox"] li').contains('51-200').click({ force: true });
      });

      cy.get('[data-placeholder="Company Bio"]').type('AdminPro Solutions provides expert administrative and support services to help businesses streamline operations and enhance efficiency. We deliver reliable, tailored solutions so our clients can focus on their core goals.');
      cy.wait(500)
     // cy.get('input[name="share_entity"]').click();
      cy.wait(500)
      cy.get('button[type="submit"]').click();
     // cy.get('button[type="submit"]').contains('Save').click();

      cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts');
 




  });

});

