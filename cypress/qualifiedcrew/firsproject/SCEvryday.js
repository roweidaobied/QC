/*describe('Automated Candidate SignUp and Login with Slack Notification', () => {

  const slackWebhookUrl = 'https://hooks.slack.com/services/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';
  
  const date = new Date();
  const dayNumber = date.getDate(); // 1، 2، 3...
  const email = `candidate${dayNumber}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Candidate Automation';

  // Slack Message Sender
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

  it('Candidate Sign Up and Login', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // اختيار Candidate
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click(); // هذا الـ Employee
    cy.get('input[name="name"]').type(fullName);
    cy.get('#root').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="policy"]').click();
    cy.get('button[type="submit"]').click();

    cy.wait(5000); // استنّى شوية بعد التسجيل

    // تسجيل الدخول
    cy.visit('https://www.qualifiedcrew.com/');
    cy.get('.css-t7kd4y .css-1bimden').click();
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // نتيجة الدخول
    cy.url().then((url) => {
      if (url.includes('/dashboard')) {
        sendSlackMessage(`✅ Candidate login success for ${email} on ${new Date().toLocaleString()}`);
      } else {
        sendSlackMessage(`❌ Candidate login failed for ${email} on ${new Date().toLocaleString()}`);
      }
    });
  });

});*/
/*describe('Automated Candidate SignUp and Login with Slack Notification', () => {

  const slackWebhookUrl = 'https://hooks.slack.com/services/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';

  const timestamp = Date.now();
  const email = `candidate${timestamp}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Candidate Automation';

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

  it('Sign Up and Login as Candidate', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // اختر "Candidate" (عادة تكون الخيار الأول)
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();

    cy.get('input[name="name"]').clear().type(fullName, { delay: 50 });
    cy.get('input[name="email"]').clear().type(email, { delay: 50 });
    cy.get('input[name="password"]').clear().type(password, { delay: 50 });

    cy.get('input[name="policy"]').click();

    cy.get('button[type="submit"]').click();

    cy.wait(5000);

    // تسجيل الدخول
    cy.visit('https://www.qualifiedcrew.com/');
    cy.get('.css-t7kd4y .css-1bimden').click();

    cy.get('input[name="email"]').clear().type(email, { delay: 50 });
    cy.get('input[name="password"]').clear().type(password, { delay: 50 });

    cy.get('button[type="submit"]').click();

    cy.url().then(url => {
      const now = new Date().toLocaleString();
      if (url.includes('/dashboard')) {
        sendSlackMessage(`✅ Candidate login success for ${email} on ${now}`);
      } else {
        sendSlackMessage(`❌ Candidate login failed for ${email} on ${now}`);
      }
    });
  });

});*/
describe('Automated Candidate SignUp with Slack Notification', () => {
  const slackWebhookUrl = 'https://hooks.slack.com/services/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';

  const timestamp = Date.now();
  const email = `candidate${timestamp}@gmail.com`;
  const password = 'Admin@123';
  const fullName = 'Candidate Automation';

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

  it('Candidate Sign Up and notify Slack', () => {
    cy.visit('https://www.qualifiedcrew.com/register/account-type');

    // اختيار Candidate
    cy.get('.css-grry9j:nth-child(1) .css-h1jf7p').click();

    // تعبئة البيانات
    cy.get('input[name="name"]').type(fullName);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('input[name="policy"]').click();

    cy.get('button[type="submit"]').click();

    // ننتظر بعض الوقت أو ننتظر عنصر معين يظهر بعد التسجيل
    cy.url({ timeout: 10000 }).should('not.include', '/register'); // مثلاً التأكد أن الرابط تغير

    // نتحقق من نجاح التسجيل عبر الرابط أو عنصر بالصفحة
    cy.url().then(url => {
      const now = new Date().toLocaleString();
      if (url.includes('/dashboard') || !url.includes('/register')) {
        sendSlackMessage(`✅ Candidate sign up success for ${email} on ${now}`);
      } else {
        sendSlackMessage(`❌ Candidate sign up failed for ${email} on ${now}`);
      }
    });
  });
});

