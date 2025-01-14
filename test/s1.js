describe('S1', function() {

  after(function() {
    browser.end();
  });
  
    it('Demande de reservation', function(browser) {
      const contactData = {
        firstName: 'test',
        lastName: 'test',
        mobilePhone: '0600000000',
        email: 'test@example.com',
        arrivedAt: '2024-06-15',
        departureAt: '2024-06-20',
        message: 'test.'
      };

      browser
        .navigateTo('http://127.0.0.1:9090/contact')
        .waitForElementVisible('body', 1000)
        .setValue('input[name="firstName"]', contactData.firstName)
        .setValue('input[name="lastName"]', contactData.lastName)
        .setValue('input[name="mobilePhone"]', contactData.mobilePhone)
        .setValue('input[name="email"]', contactData.email)
        .execute(function(date) {
          document.querySelector('input[name="arrivedAt"]').value = date;
          return true;
        }, [contactData.arrivedAt])
        .execute(function(date) {
          document.querySelector('input[name="departureAt"]').value = date;
          return true;
        }, [contactData.departureAt])
        .setValue('textarea[name="message"]', contactData.message)
        .execute('document.querySelector("button[type=\'submit\']").scrollIntoView(true);')
        .pause(500)
        .click('button[type="submit"]')
        .pause(2000)
        .assert.valueEquals('input[name="firstName"]', '')
        .assert.valueEquals('input[name="lastName"]', '')
        .assert.valueEquals('input[name="mobilePhone"]', '')
        .assert.valueEquals('input[name="email"]', '')
        .assert.valueEquals('input[name="arrivedAt"]', '')
        .assert.valueEquals('input[name="departureAt"]', '')
        .assert.valueEquals('textarea[name="message"]', '');
    }); 
  });