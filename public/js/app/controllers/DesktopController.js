define([
    'Filmtrik', 
    'backbone', 
    'marionette', 
    'views/NavLoggedInView',
    'views/UserMenuView',
    'views/SearchMenuView',
    'views/BoxOfficeView',
    'views/PreviewView',
    'views/NavNotLoggedInView',
    'views/FooterView'
    ],
    function (
    Filmtrik, 
    Backbone, 
    Marionette, 
    NavLoggedInView,
    UserMenuView,
    SearchMenuView,
    BoxOfficeView,
    PreviewView,
    NavNotLoggedInView,
    FooterView
    ){
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            Filmtrik.appRouter.navigate('landing', {trigger: true});
        },
        landing: function() {
            Filmtrik.navRegion.show(new NavNotLoggedInView());
            Filmtrik.mainAppRegion.show(new PreviewView());
            Filmtrik.footerRegion.show(new FooterView());
        },
        boxoffice: function() {
            //TODO: isLoggedIn check
            // Filmtrik.navRegion.show(new NavLoggedInView());
            // Filmtrik.userMenuRegion.show(new UserMenuView());
            // Filmtrik.searchNavRegion.show(new SearchMenuView());
            // Filmtrik.mainAppRegion.show(new BoxOfficeView());
        }
    });
});