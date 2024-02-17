// main.js
require.config({
   paths: {
       'marionette': "../nuc/lib/marionette",
       'backbone': '../nuc/lib/backbone',

       'underscore': '../nuc/lib/underscore',
       'jquery': '../nuc/lib/jquery',
       'backbone.radio': '../nuc/lib/backbone.radio',

   },
   shim: {
       'marionette': {
           deps: ['backbone', 'backbone.radio'],
           exports: 'Marionette'
       },
       'backbone.radio': {
           deps: ['backbone'],
           exports: 'Marionette.Radio'
       }
   }
});


require(['app','marionette','backbone'], function (App,Marionette,Backbone) {
   App.start();
});


