/*
    FilmtrikCart
    - Handles all cart functions
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
    var FilmtrikCart = Backbone.Model.extend({

        initialize: function() {
            _.bindAll(this);

        },
        count: function() {
            return Filmtrik.cart.items.length;  
        },
        qty_up: function(item) {
            item.qty++;
        },
        qty_down: function(item) {
            item.qty--;

            if (item.qty === 0) {
                this.remove(item);
            }
        },
        remove: function(item) {
             var position = Filmtrik.cart.items.indexOf(item);

             if ( ~position ) Filmtrik.cart.items.splice(position, 1);
        },
        item: function(x) {
                return Filmtrik.cart.items[x];
        },
        clear: function() {
            Filmtrik.cart.items = [];
        },
        add: function(item) {
            Filmtrik.cart.items.push(item);
        }, 
        edit: function(item, old_key, new_val) {
           var position = Filmtrik.cart.items.indexOf(item);

           if ( ~position ) {
           }
        },
        total: function() {
            var cart_total = null;
            // for (var i = 0; i < Filmtrik.cart.count(); i++) {
            //     cart_total += parseInt(Filmtrik.cart.items[i].price.replace(/\D/g,''));
            // }

            return cart_total;
        }
    });

    // Returns the Model class
    return  FilmtrikCart;

}

);
