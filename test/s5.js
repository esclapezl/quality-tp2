describe('S5', () => {
    after(function() {
        browser.end();
      });
  
    it('Laisser un avis avec succès', (browser) => {
      const feedbackData = {
        name: 'test',
        message: 'test'
      };

      browser
        .navigateTo('http://127.0.0.1:9090/feedback')
        .waitForElementVisible('body', 1000)
      browser
        .execute('document.querySelector("form").scrollIntoView();')
        .pause(500)

        .setValue('input[name="name"]', feedbackData.name)
        .setValue('textarea[name="message"]', feedbackData.message)
        .click('button[type="submit"]')
        .pause(2000) 
        
        .assert.containsText('.card-header', feedbackData.name)
        .assert.containsText('.blockquote p', feedbackData.message);
    });
  });