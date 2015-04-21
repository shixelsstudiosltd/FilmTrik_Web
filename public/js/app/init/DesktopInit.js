// Include Desktop Specific JavaScript files here (or inside of your Desktop Controller, or differentiate based off App.mobile === false)
require(["Filmtrik", "routers/AppRouter", "controllers/DesktopController", "jquery", "backbone", "marionette", "jqueryui", "bootstrap", "backbone.validateAll"],
    function (Filmtrik, AppRouter, AppController) {
        Filmtrik.appRouter = new AppRouter({
            controller:new AppController()
        });
        // Start Marionette Application in desktop mode (default)
        Filmtrik.start();

    });