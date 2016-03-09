define([
    'intern!bdd', 
    'intern/chai!assert', 
    'intern/dojo/node!leadfoot/Command', 
    '../support/utils',
    '../support/pages/elementsPage',    
    '../support/pages/propertiesPage',
    '../support/pages/loginPage',
    '../support/pages/modalPage',
    'require'
], function (bdd, assert, Command, utils, elements, properties, loginPage, modalPage, require) {
   
    var loginPage; 
    var modalPage;

    bdd.describe('Channel Filter', function () {
        bdd.before(function () {
            loginPage = new loginPage(this.remote);
            modalPage = new modalPage(this.remote);
            return loginPage.login();
        });

       // bdd.after(function () {
         //   return loginPage.logout();
        //});

        bdd.it('should close the modal', function () {
            //this.skip();
            return modalPage
                .close();
        });

        bdd.it('should navigate through the screens in the modal', function () {
            return modalPage
                .navigate();
        });

    });
});
           
