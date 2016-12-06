$(function(){
  console.log('App loaded');
  _.extend(Mapp, Backbone.Events);
  var router = new Mapp.Router();
  Backbone.history.start();
});
