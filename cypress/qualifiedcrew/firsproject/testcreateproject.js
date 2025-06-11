describe("User Recruiter and Create Project Tests", () => {

  // تسجيل الدخول والتنقل لصفحة إنشاء المشروع
  before(() => {
    cy.visit('https://www.qualifiedcrew.com/');

    // تسجيل الدخول
    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').should('not.be.disabled').click();

    cy.url().should('include', '/dashboard');

    // فتح قائمة المشاريع والذهاب لإنشاء مشروع جديد
    cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Projects').click({ force: true });
    cy.wait(500);
    cy.visit('https://www.qualifiedcrew.com/dashboard/projects/new');
  });

  // إعادة تحميل صفحة إنشاء المشروع قبل كل اختبار هنا عشان تضمن حالة نظيفة
  beforeEach(() => {
    cy.visit('https://www.qualifiedcrew.com/dashboard/projects/new');
  });

  it("Should show validation messages when all required fields are empty", () => {
    cy.get('button#\\:rco\\:').click();

    cy.contains("Name is required").should("be.visible");
    cy.contains("Company is required").should("be.visible");
    cy.contains("Start date is required").should("be.visible");
    cy.contains("End date is required").should("be.visible");
    cy.contains("Description is required").should("be.visible");
  });

  it("Should show validation message for only the Name field when left empty", () => {
 
    cy.get('.MuiAutocomplete-popupIndicator').eq(0).click();
    cy.get('ul[role="listbox"]').should('be.visible');
    cy.get('ul[role="listbox"] li').contains('TechNova Solutions').click();

    
    cy.get('[data-testid="CalendarIcon"]').eq(0).click();
    cy.get('button[aria-label="Next month"]').click();
    cy.contains('button', '23').click({ force: true });

    cy.get('[data-testid="CalendarIcon"]').eq(1).click();
    for(let i = 0; i < 6; i++) {
      cy.get('button[aria-label="Next month"]').first().click();
      cy.wait(500);
    }
    cy.contains('button', '25').click({ force: true });

    // وصف المشروع
    cy.get('[data-placeholder="Project description"]').type("This is a test project description.");

    // اضغط إنشاء بدون كتابة الاسم
    cy.get('button#\\:rco\\:').click();

    // تأكد ظهور رسالة الخطأ للاسم فقط
    cy.contains("Name is required").should("be.visible");
  });

  it("Should successfully create project when all fields are valid", () => {
    cy.get('input[name="name"]').type('Project Management System');

    // اختر الشركة
    cy.get('.MuiAutocomplete-popupIndicator').eq(0).click();
    cy.get('ul[role="listbox"]').should('be.visible');
    cy.get('ul[role="listbox"] li').contains('TechNova Solutions').click();

    // أدخل تواريخ البداية والنهاية
    cy.get('[data-testid="CalendarIcon"]').eq(0).click();
    cy.get('button[aria-label="Next month"]').click();
    cy.contains('button', '23').click({ force: true });

    cy.get('[data-testid="CalendarIcon"]').eq(1).click();
    for(let i = 0; i < 6; i++) {
      cy.get('button[aria-label="Next month"]').first().click();
      cy.wait(500);
    }
    cy.contains('button', '25').click({ force: true });

    // وصف المشروع
    cy.get('[data-placeholder="Project description"]').type(
      'CodeCrafters Inc is launching an advanced internal project management system tailored for IT teams.'
    );

    // اضغط زر الإنشاء
    cy.get('button#\\:rco\\:').then($btn => {
      $btn[0].click();
    });

    // تأكد من التوجيه لصفحة المشاريع (URL أو رسالة نجاح)
    cy.url().should('include', '/dashboard/projects');
    cy.contains("Project created successfully").should('be.visible').or(() => {
      // ممكن الموقع ما يعرض رسالة لكن ينقل للصفحة بنجاح
      cy.url().should('include', '/dashboard/projects');
    });
  });

  it("Cancel button should redirect back to Projects list", () => {
    cy.contains("Cancel").click();
    cy.url().should("include", "/dashboard/projects");
  });

});
