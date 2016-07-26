// describe('angularjs homepage todo list', function() {
//   it('should add a todo', function() {
//     browser.get('https://angularjs.org');
//
//     element(by.model('todoList.todoText')).sendKeys('write first protractor test');
//     element(by.css('[value="add"]')).click();
//
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });

// describe('BMW Insurance Landing Page', function() {
//   it('should have a login', function() {
//     browser.driver.manage().window().setSize(780, 1000);
//     browser.get('https://test-services.monument.co.nz/bmw/#/');
//
//
//     element(by.css('[value="btn-xl"]')).click();
//     element(by.css('[value="btn-xl"]'))
//
//     var todoList = element.all(by.repeater('todo in todoList.todos'));
//     expect(todoList.count()).toEqual(3);
//     expect(todoList.get(2).getText()).toEqual('write first protractor test');
//
//     // You wrote your first test, cross it off the list
//     todoList.get(2).element(by.css('input')).click();
//     var completedAmount = element.all(by.css('.done-true'));
//     expect(completedAmount.count()).toEqual(2);
//   });
// });


describe("login module", function(){
    it("should login succesfully using auth0", function(){
        //set window size and navigate to the path where the template is loaded
        browser.driver.manage().window().setSize(1500, 1000);
        browser.driver.get('https://test-services.monument.co.nz/bmw/#/');

        element(by.css(".btn-xl")).click();

        //check if email field exists to see if the pop-up has been succesfully loaded
        var emailFieldExists = by.id('a0-signin_easy_email');
        browser.driver.wait(function() {
            return browser.driver.isElementPresent(emailFieldExists);
        }, 2000);
        //wait for pop-up fields to be displayed (they are on the page but might be hidden initially)
        browser.driver.sleep(1000);

        //type credentials and click the 'access' button to log in
        var emailField = element(by.id('a0-signin_easy_email'));
        emailField.sendKeys('crombielockwood.co.nz');
        var passWordField = element(by.id('a0-signin_easy_password'));
        passWordField.sendKeys('Password');
        var accessButton = element(by.css('.a0-notloggedin .a0-primary'));
        accessButton.click();

        //verify that the login was succesfull by checking if the logout button is displayed
        expect(element(by.linkText('Logout')).isPresent());
    });
});
