define(['jquery', 'hbs!templates/boxOffice', 'backbone','models/Model', 'views/MoviePreviewView', 'marionette'],
    function ($, template, Backbone, Model, MoviePreviewView) {
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
                
                var moviePreviewView = new MoviePreviewView();
                var moviePreviewSelector = '.video-preview-holder';
                console.log($(moviePreviewSelector));
                
            }
        });
    });