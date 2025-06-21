describe("Project View Page ", () => {

  it("Should open the first project's View page", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    // ✅ Login
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    //  Open Projects page
    cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Projects').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/projects');

    // اضغط على تلات شحطات لأول Project
    cy.get('button[aria-haspopup="true"]').eq(0).click();

    // اضغط View
    cy.contains('a', 'View').click();

    cy.url().should('include', '/view');
  });

});
// لو كان عندي اكتر من بروجكت وبدي اعمل باك وافتحهم كلهم وكل مره اعمل رجوع وافتح التاني هاي تست الها 
/*describe("Projects View Multiple Test", () => {

  it("Should open View for ALL projects one by one", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    // ✅ Login
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    //  Open Projects page
    cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Projects').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/projects');

    //  تأكد انه فيه أكثر من Project
    cy.get('button[aria-haspopup="true"]').should('have.length.greaterThan', 0);

    //  كرّر العملية على كل Project (مثلا 3 مشاريع)
    for (let i = 0; i < 3; i++) {
      cy.log(`🔑 Testing Project #${i + 1}`);

      // اضغط التلات شحطات للـ i
      cy.get('button[aria-haspopup="true"]').eq(i).click();

      // اضغط View
      cy.contains('a', 'View').click();

      // تأكد انك داخل صفحة View
      cy.url().should('include', '/view');

      // ارجع Back للـ Projects page
      cy.go('back');

      // تأكد انك رجعت على Projects
      cy.url().should('include', '/dashboard/projects');

      // اختياري: انتظر شوي قبل المشروع اللي بعده
      cy.wait(500);
    }

  });

});*/
