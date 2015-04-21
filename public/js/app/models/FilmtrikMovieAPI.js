/*
    MansardAPI
    - Does all API calls and returns JSON objects for use
*/
define([
    "jquery",
    "underscore",
    "backbone"
    ],
    function(
    $,
    _,
    Backbone
    ){
    // Creates a new Backbone Model class object
    var FilmtrikMovieAPI = Backbone.Model.extend({

        initialize: function() {
            _.bindAll(this);

        }
    });

    // Returns the Model class
    return  FilmtrikMovieAPI;

}

);
