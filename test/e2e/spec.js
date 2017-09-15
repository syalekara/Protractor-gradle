describe('Fitbase scenarios', function () {
    var homePage = element(by.id('main'));
    //var signUp = element(by.id('signup1'));
   // var JoinAsTrainer = element(by.href('https://www.fitbase.com/trainer/signup')); 
    //var uiViewDirective = element(by.css('div[ui-view]'));

    beforeEach(function () {
        browser.get("https://www.fitbase.com/");
    });

   function currentStateName(){
              var currentStateName =  browser.executeAsyncScript(function(callback) {
              var el = document.querySelector("html");  // ng-app is defined on html element in this case
              var injector = angular.element(el).injector();
              var service = injector.get('$state');           

       callback(service.current.name);
        });
        browser.driver.sleep(1000); 
        return currentStateName;
    }

    it("should identify home page", function (){         

        expect(name.getText()).toEqual("main");
   
    });

});