// app.js
define(['marionette', 'backbone'], function (Marionette, Backbone) {
   var App = new Marionette.Application();


   // Use addRegion instead of addRegions
  App.addRegion('mainRegion', '#app-container');


   App.on('start', function () {
       var headerView = new HeaderView();
       App.mainRegion.show(headerView);
   });


   var HeaderView = Marionette.ItemView.extend({
       template: _.template('<h1>Ishaan Kumar</h1>')
   });


   return App;
});


