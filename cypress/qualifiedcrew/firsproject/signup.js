describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
    });
  
    it('Should register as an Employee', () => {
        cy.visit('https://www.qualifiedcrew.com/register/account-type');
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
    cy.get('input[name="name"]').type('Sara Alrawashdeh');
    cy.get('#root').type("sara@gmail.com")
    cy.get('input[name="password"]').type('Admin@123');
    cy.get('input[name="policy"]').click()
    cy.get('button[type="submit"]').click();
});
it('Should register as an exists Employee', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
    cy.get('input[name="name"]').type('Sara Alrawashdeh');
    cy.get('#root').type("saraialrawashdeh@gmail.com")
    cy.get('input[name="password"]').type('Sara123/');
    cy.get('input[name="policy"]').click()
    cy.get('button[type="submit"]').click();
});

it('Should register as an Employee', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee@gmail.com")
cy.get('input[name="password"]').type('Admin@123');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});
it('Should register as an invalid  formate email', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
    cy.get('input[name="name"]').type('Sara Alrawashdeh');
    cy.get('#root').type("rodeobbgmail.com")
    cy.get('input[name="password"]').type('Sara123/');
    cy.get('input[name="policy"]').click()
    cy.get('button[type="submit"]').click();
});
it('incorrect password', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee@gmail.com")
cy.get('input[name="password"]').type('admin@123');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});
it('The password less than 8 char ', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee4@gmail.com")
cy.get('input[name="password"]').type('Admin');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});
it('The password Without Special character', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee3@gmail.com")
cy.get('input[name="password"]').type('Admin123');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});
it('The password Without number', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee2@gmail.com")
cy.get('input[name="password"]').type('Admin@');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});

it('The password empity', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("rodeeeee1@gmail.com")
cy.get('input[name="password"]').type("");
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});
it('The email empity', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("")
cy.get('input[name="password"]').type('admin@123');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});

it('The Username empity', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');
cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();
cy.get('input[name="name"]').type('rodeeeee');
cy.get('#root').type("")
cy.get('input[name="password"]').type('admin@123');
cy.get('input[name="policy"]').click()
cy.get('button[type="submit"]').click();
});

});