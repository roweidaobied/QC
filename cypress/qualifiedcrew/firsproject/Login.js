describe("User and Recruiter and Login",()=>{
    it("User Login ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdeh@gmail.com');
         cy.get('input[name="password"]').type('Sara123/');
           cy.get('button[type="submit"]').click();
    });
    it("User Login",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweida@gmail.com');
         cy.get('input[name="password"]').type('Admin@123');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaid@gmail.com');
         cy.get('input[name="password"]').type('Admin@123');
           cy.get('button[type="submit"]').click();
    });
    
    it("User Login invalid email ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdehgmail.com');
         cy.get('input[name="password"]').type('Sara123/');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login invalid email",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaidgmail.com');
         cy.get('input[name="password"]').type('Admin@123');
           cy.get('button[type="submit"]').click();
    });

    it("User Login email empity ", ()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('');
         cy.get('input[name="password"]').type('Sara123/');
           cy.get('button[type="submit"]').click();
    });

    it("Recruiter  Login  email empity",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('');
         cy.get('input[name="password"]').type('Admin@123');
           cy.get('button[type="submit"]').click();
    });

    it("User Login empity password ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdehgmail.com');
         cy.get('input[name="password"]').type('');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login empity email",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaidgmail.com');
         cy.get('input[name="password"]').type('Admin@123');
           cy.get('button[type="submit"]').click();
    });

    it("User Login  password Without number ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdehgmail.com');
         cy.get('input[name="password"]').type('Sara/');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login  password Without number",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaidgmail.com');
         cy.get('input[name="password"]').type('Admin@');
           cy.get('button[type="submit"]').click();
    });


    it("User Login  password Without Special character ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdehgmail.com');
         cy.get('input[name="password"]').type('Sara123');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login password Without Special character",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaidgmail.com');
         cy.get('input[name="password"]').type('Admin123');
           cy.get('button[type="submit"]').click();
    });

    it("User Login password less than 8 char ",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('saraialrawashdehgmail.com');
         cy.get('input[name="password"]').type('Sar');
           cy.get('button[type="submit"]').click();
    });
    it("Recruiter  Login password less than 8 char",()=>{
        cy.visit('https://www.qualifiedcrew.com/');
         cy.get('.css-t7kd4y .css-1bimden').click();
        
         cy.get('input[name="email"]').type('roweidaobaidgmail.com');
         cy.get('input[name="password"]').type('Adm');
           cy.get('button[type="submit"]').click();
    });

    })
