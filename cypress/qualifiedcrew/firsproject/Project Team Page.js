describe("Project Team Page Test", () => {

  it("Should open the first project's Team page", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    // Login
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    // Open Projects page
   cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Projects').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/projects');

    // اضغط على تلات شحطات لأول Project
    cy.get('button[aria-haspopup="true"]').eq(0).click();

    //  اضغط Team
    cy.contains('a', 'Team').click();

    cy.url().should('include', '/team');
  });

});
