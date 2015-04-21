define([
    'jquery', 
    'backbone', 
    'marionette', 
    'underscore', 
    'handlebars',
    'models/FilmtrikCoreAPI',
    'models/FilmtrikCart'
    ],
    function (
    $, 
    Backbone, 
    Marionette, 
    _, 
    Handlebars,
    FilmtrikCoreAPI,
    FilmtrikCart
    ){
        var Filmtrik = window.Filmtrik = new Backbone.Marionette.Application();

        function isMobile() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
        }

        Filmtrik.api = new FilmtrikCoreAPI();
        Filmtrik.cart = new FilmtrikCart();
        Filmtrik.cart.items = [];
        
        // if (localStorage.getItem("session") === null) {
        //     Mansard.isLoggedIn = false;
        //     Mansard.currentUser = null;
        //     Mansard.currentUser_SubAgentCode = null;
        // } else {
        //     Mansard.isLoggedIn = true;
        //     Mansard.current = JSON.parse(JSON.parse(JSON.parse(localStorage.getItem("session")).agent));
        //     Mansard.isFA = checkFA(Mansard.current.AgentCode, Mansard.current.username);
        //     Mansard.currentUser = JSON.parse(JSON.parse(JSON.parse(localStorage.getItem("session")).agent)).username;
        //     Mansard.currentUser_SubAgentCode = null;
        // }


        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        Filmtrik.addRegions({
            navRegion:"#nav-container",
            mainAppRegion:"#main-body-container",
            footerRegion: "#main-footer-container",
            fullAppRegion: "#page",
            searchNavRegion: "#search-nav-container",
            userMenuRegion: "#user-menu"
        });

        Filmtrik.addInitializer(function () {
            Backbone.history.start();
        });

        Filmtrik.mobile = isMobile();

        return Filmtrik;
    });