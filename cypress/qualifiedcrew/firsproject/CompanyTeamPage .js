describe("Company Team Page ", () => {

  it("Should open the selected company's Team page", () => {
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

    // Click Team for a specific company (index 2)
    cy.get('button[aria-haspopup="true"]').eq(2).click();

    // ✅ اضغط Team من المينيو
    cy.contains('a', 'Team').click();

    // ✅ تأكد انك فتحت Team page
    cy.url().should('include', '/team');


  });

});
