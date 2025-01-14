describe('S6', () => {
    after(function() {
        browser.end();
      });
  
    it('Laisser un avis avec erreur', (browser) => {
      browser
        .navigateTo('http://127.0.0.1:9090/feedback')
        .waitForElementVisible('body', 1000)
      browser
        .execute('document.querySelector("form").scrollIntoView();')
        .pause(500)

        .setValue('input[name="name"]', 'erreur')
        .click('button[type="submit"]')
        .pause(2000) 
        
        .assert.not.containsText('.card-header', 'erreur')
    });
  });