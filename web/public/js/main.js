$(function(){
  console.log('App loaded');
  _.extend(Mapp, Backbone.Events);
  Mapp.router = new Mapp.Router();
  Backbone.history.start();
});
