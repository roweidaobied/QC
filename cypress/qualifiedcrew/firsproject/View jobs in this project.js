describe("View jobs in this project", () => {

  it("Should open the first project's View page and see linked Jobs", () => {
    cy.visit('https://www.qualifiedcrew.com/');

    //  Login
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

    //  اضغط تلات شحطات لأول Project
    cy.get('button[aria-haspopup="true"]').eq(0).click();

    //  اضغط View
    cy.contains('a', 'View').click();

    cy.url().should('include', '/view');

    //  اضغط على تبويب Jobs المرتبطين بهذا الـ Project
    cy.contains('button', 'Jobs').click();

    // تأكد إن التاب فتح — مثلاً تأكد انه ظهر جدول أو كلمة Jobs
    cy.contains('Jobs').should('be.visible');

    cy.go('back');
    cy.wait(500);

    // View SECOND project
    cy.get('button[aria-haspopup="true"]').eq(1).click();
    cy.contains('a', 'View').click();
    cy.url().should('include', '/view');
    cy.contains('button', 'Jobs').click();
    cy.contains('Jobs').should('be.visible');
    // ونفس الحركه لو بدي اشوف كل البروجكت الي عندي 

  });

});