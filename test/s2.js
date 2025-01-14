describe('S2', function() {

    after(function() {
        browser.end();
      });
    it('Demande de reservation sans saisir les infos', function(browser) {
      browser
        .navigateTo('http://127.0.0.1:9090/contact')
        .waitForElementVisible('body', 1000)
        .setValue('input[name="firstName"]', 'test')
        .execute('document.querySelector("button[type=\'submit\']").scrollIntoView(true);')
        .pause(500)
        .click('button[type="submit"]')
        .pause(2000)
        .assert.valueEquals('input[name="firstName"]', 'test')
        .assert.attributeContains('input[name="firstName"]', 'required', 'true')
        .assert.valueEquals('input[name="lastName"]', '');
    }); 
  });