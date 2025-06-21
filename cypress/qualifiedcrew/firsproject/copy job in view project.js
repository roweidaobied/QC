describe("View a Project and verify its linked Jobs", () => {

  it("Should open the first Project's View page, open its Jobs tab and copy the first Job", () => {
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

    // اضغط التلات شحطات لأول Project
    cy.get('button[aria-haspopup="true"]').eq(1).click();

    // ✅ اضغط View
    cy.contains('a', 'View').click();
    cy.url().should('include', '/view');

    // ✅ افتح تبويب Jobs
    cy.contains('button', 'Jobs').click();
    cy.contains('Jobs').should('be.visible');

    // ✅ اضغط Copy لأول Job تابع لهذا الـ Project
    cy.get('button[aria-label="Copy link"]').eq(0).click();

   cy.contains('Link copied').should('be.visible');

  

    // او اكتر طبعا  اضغط Copy لأول 3 Jobs
    /*cy.get('button[aria-label="Copy link"]').each(($btn, index) => {
  if (index < 3) {
    cy.wrap($btn).click();
    cy.contains('Link copied').should('be.visible');
    cy.contains('Link copied').should('not.exist');
  }
});*/

  });

});