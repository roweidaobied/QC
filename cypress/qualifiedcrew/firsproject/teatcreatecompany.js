describe("Recruiter Add Company - Full Test Cases", () => {

  beforeEach(() => {
    cy.visit('https://www.qualifiedcrew.com/');

    cy.get('.css-t7kd4y .css-1bimden', { timeout: 10000 }).should('be.visible').click();
    cy.get('input[name="email"]').type('naseerob74@gmail.com');
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.get('svg.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').first().click();
    cy.contains('span', 'Companies').click({ force: true });

    cy.visit('https://www.qualifiedcrew.com/dashboard/company-accounts/new');
  });

  it("TC001 - Valid company data", () => {
    cy.get('input[name="name"]').type('CodeCrafters Inc');
    cy.get('input[name="industry"]').click();
    cy.contains('li', 'Architectural and Structural Metal Manufacturing').click();

    cy.get('input[name="country"]').click();
    cy.contains('li', 'Saudi Arabia').click();

    cy.get('input[name="website"]').type('https://www.codecrafters.com');

    cy.get('.MuiInputBase-root').eq(3).click();
    cy.contains('li', '51-200').click();

    cy.get('[data-placeholder="Company Bio"]').type('We specialize in civil engineering and project management.');
    cy.get('input[name="share_entity"]').click();
    cy.get('button[type="submit"]').click();
  });

  it("TC002 - Empty name field", () => {
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('button[type="submit"]').click();
    cy.contains('This field is required').should('exist');
  });

  it("TC003 - Name with only numbers", () => {
    cy.get('input[name="name"]').type('123456');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid name').should('exist'); // adjust based on actual validation message
  });

  it("TC004 - Name with only symbols", () => {
    cy.get('input[name="name"]').type('!@#$%^&*');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid name').should('exist');
  });

  it("TC005 - Name with only spaces", () => {
    cy.get('input[name="name"]').type('     ');
    cy.get('button[type="submit"]').click();
    cy.contains('This field is required').should('exist');
  });

  it("TC006 - Invalid website URL", () => {
    cy.get('input[name="name"]').type('Test Company');
    cy.get('input[name="website"]').type('invalid-url');
    cy.get('button[type="submit"]').click();
    cy.contains('Invalid URL').should('exist');
  });

  it("TC007 - No industry selected", () => {
    cy.get('input[name="name"]').type('Test Company');
    // don’t select industry
    cy.get('input[name="country"]').click();
    cy.contains('li', 'Saudi Arabia').click();
    cy.get('input[name="website"]').type('https://valid.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Please select industry').should('exist');
  });

  it("TC008 - No country selected", () => {
    cy.get('input[name="name"]').type('Test Company');
    cy.get('input[name="industry"]').click();
    cy.contains('li', 'Architectural and Structural Metal Manufacturing').click();
    // don’t select country
    cy.get('input[name="website"]').type('https://valid.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Please select country').should('exist');
  });

  it("TC009 - Bio too short", () => {
    cy.get('input[name="name"]').type('Test Company');
    cy.get('input[name="industry"]').click();
    cy.contains('li', 'Architectural and Structural Metal Manufacturing').click();
    cy.get('input[name="country"]').click();
    cy.contains('li', 'Saudi Arabia').click();
    cy.get('input[name="website"]').type('https://valid.com');
    cy.get('[data-placeholder="Company Bio"]').type('Hi');
    cy.get('button[type="submit"]').click();
    cy.contains('Bio must be longer').should('exist'); // adjust to your real validation
  });

});
