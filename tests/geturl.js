module.exports = {
    "openUrl": function (browser) {
        browser
            // Navigate to the URL
            .windowMaximize()
            
            .url("https://the-internet.herokuapp.com/login")
            
            // Wait for the username field to be visible and set value (CSS selector)
            .setValue('#username', 'tomsmith')
            
            // Wait for the password field to be visible and set value (CSS selector)
            .setValue('#password', 'SuperSecretPassword!')
            
            // Wait for the submit button to be visible and click it (CSS selector)
            .click('button[type="submit"]')
            
            // Switch to XPath for subsequent selectors
            .useXpath()
            
            // Verify the flash message
            .assert.containsText('//div[@id="flash"]', 'You logged into a secure area!')
            
            // Wait for the logout button and click
            .click('//div[@id="content"]//a[@class="button secondary radius"]')
            
            // End the session
            .end();
    }
};
