/*describe('Automated SignUp and Login with Slack Notification as an Recruiter', () => {

  const slackWebhookUrl = 'https://hooks.slack.com/services/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';
  
  // توليد إيميل حسب تاريخ اليوم
  const date = new Date();
  const dayNumber = date.getDate(); // مثلاً 9
  const email = `test${dayNumber}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Test Automation';

  // إرسال رسالة إلى Slack
  function sendSlackMessage(message) {
    cy.request({
      method: 'POST',
      url: slackWebhookUrl,
      body: {
        text: message
      },
      headers: {
        'Content-Type': 'application/json'
      },
      failOnStatusCode: false
    });
  }

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Sign Up as Recruiter and Login', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // التسجيل كمُوظِّف
    cy.get('.css-grry9j:nth-child(2) .css-h1jf7p').click();
    cy.get('input[name="name"]').type(fullName);
    cy.get('#root').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="policy"]').click();
    cy.get('button[type="submit"]').click();

    // انتظر التحميل ثم جرّب تسجيل الدخول
    cy.wait(5000); // انتظر شوي

    // تسجيل دخول
    cy.visit('https://www.qualifiedcrew.com/');
    cy.get('.css-t7kd4y .css-1bimden').click();
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // التحقق من النجاح أو الفشل
    cy.url().then((url) => {
      if (url.includes('/dashboard')) {
        sendSlackMessage(`✅ Login success for ${email} on ${new Date().toLocaleString()}`);
      } else {
        sendSlackMessage(`❌ Login failed for ${email} on ${new Date().toLocaleString()}`);
      }
    });

  });

});*/



// صح %100
/*describe('Automated SignUp and Login with Slack Notification as a Recruiter', () => {

  const slackWebhookUrl = 'https://hooks.slack.com/services/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';

  const date = new Date();
  const dayNumber = date.getDate();
  const email = `test${dayNumber}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Test Automation';

  function sendSlackMessage(message) {
    cy.request({
      method: 'POST',
      url: slackWebhookUrl,
      body: { text: message },
      headers: { 'Content-Type': 'application/json' },
      failOnStatusCode: false
    });
  }

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Sign Up as Recruiter and Login', () => {
    // Step 1: Visit register page
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // Step 2: Select Recruiter account type
    cy.get('.css-grry9j:nth-child(2) .css-h1jf7p').click();

    // Step 3: Fill form
    cy.get('input[name="name"]').type(fullName);
    cy.get('input[name="email"]').type(email); // ✅ تم التصحيح هنا
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="policy"]').check(); // يفضل check بدل click لضمان الصحة

    // Step 4: Submit
    cy.get('button[type="submit"]').click();

    // Step 5: انتظر يتم التوجيه أو التحميل
    cy.wait(5000);

    // Step 6: Visit login page
    cy.visit('https://www.qualifiedcrew.com/');
    cy.get('.css-t7kd4y .css-1bimden').click();

    // Step 7: Fill login credentials
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Step 8: Check success/failure and notify Slack
    cy.url().then((url) => {
      const now = new Date().toLocaleString();
      if (url.includes('/dashboard')) {
        sendSlackMessage(`✅ Login success for ${email} at ${now}`);
      } else {
        sendSlackMessage(`❌ Login failed for ${email} at ${now}`);
      }
    });
  });

});*/
describe('Automated Recruiter SignUp with Slack Notification', () => {

  const slackWebhookUrl = 'https://hooks.slack.com/services/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';

  const date = new Date();
  const dayNumber = date.getDate();
  const email = `test${dayNumber}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Test Automation';

  function sendSlackMessage(message) {
    cy.request({
      method: 'POST',
      url: slackWebhookUrl,
      body: { text: message },
      headers: { 'Content-Type': 'application/json' },
      failOnStatusCode: false
    });
  }

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Sign Up as Recruiter and Notify Slack', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // Step 1: Choose recruiter account type
    cy.get('.css-grry9j:nth-child(2) .css-h1jf7p').click();

    // Step 2: Fill the registration form
    cy.get('input[name="name"]').type(fullName, { delay: 50 });
    cy.get('input[name="email"]').type(email, { delay: 50 });
    cy.get('input[name="password"]').type(password, { delay: 50 });
    cy.get('input[name="policy"]').click();
    cy.get('button[type="submit"]').click();

    // Step 3: Wait for navigation or failure
    cy.wait(6000);

    // Step 4: Check if signup success by checking URL
    cy.url().then((url) => {
      const now = new Date().toLocaleString();
      if (url.includes('/dashboard')) {
        sendSlackMessage(`✅ Recruiter Sign Up SUCCESS for ${email} at ${now}`);
      } else {
        sendSlackMessage(`❌ Recruiter Sign Up FAILED for ${email} at ${now}`);
        throw new Error('Recruiter Sign Up failed – not redirected to dashboard');
      }
    });
  });

});
