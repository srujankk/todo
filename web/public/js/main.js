$(function(){
  console.log('App loaded');
  _.extend(Mapp, Backbone.Events);
  _.extend(Mapp.KlimateApp, Backbone.Events);
  var layout = new Mapp.Layout();
  layout.render();
  $("#maincontainer").html(layout.$el);
  Mapp.router = new Mapp.Router();
  Backbone.history.start();
});
