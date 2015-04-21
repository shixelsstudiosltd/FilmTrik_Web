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
    var FilmtrikTvAPI = Backbone.Model.extend({
        defaults: {
            api_url: 'http://eztvapi.re/'
        },
        initialize: function() {
            _.bindAll(this);

        },
        shows: function() {
            $.ajax({
                url: this.get('api_url') + 'shows/',
                type: 'get',
                success: function(res) {
                    console.log(res);
                }

            });
        }
    });

    // Returns the Model class
    return  FilmtrikTvAPI;

}

);
