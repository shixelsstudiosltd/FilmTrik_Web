define(['jquery', 'hbs!templates/navNotLoggedIn', 'backbone','models/Model', 'marionette'],
    function ($, template, Backbone, Model) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template:template,
            model: null,
            events: {
            },
            initialize: function(options) {
            },
            onRender: function () {
             // get rid of that pesky wrapping-div
            // assumes 1 child element.
                this.$el = this.$el.children();
                this.setElement(this.$el);
            }
        });
    });