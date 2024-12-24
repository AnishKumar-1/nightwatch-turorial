module.exports={
    "opencheckbox": function(browser){
        browser.windowMaximize()
        .url("https://the-internet.herokuapp.com/checkboxes")
        //find form and go click on first checkbox
        .useXpath()
        .click("//form[@id='checkboxes']//input[@type='checkbox'][1]")
        .end();
    }
}