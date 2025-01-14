describe('S4', function() {

    after(function() {
        browser.end();
      });

    it('Connexion refusée', function(browser) {
      browser
        .navigateTo('http://127.0.0.1:9090/login')
        .waitForElementVisible('body', 1000)
    
        .setValue('input[name="name"]', 'test')
        .setValue('input[name="password"]', 'test')
        .click('button[type="submit"]')     
        .pause(1000)
        .waitForElementVisible('.container', 5000)
        .assert.urlEquals('http://127.0.0.1:9090/login');
    }); 
  });