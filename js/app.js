var Mapp = {};

Mapp.Router = Backbone.Router.extend({
  routes:{
    '':'home',
    'tasks':'showTasks'
  },
  home:function(){
    console.log('in home');
    var home = new Mapp.Home();
    home.render();
    $("#maincontainer").html(home.$el);
  },
  showTasks: function(){
    console.log('displaying tasks');
    var tasks = new Mapp.Tasks();
    tasks.render();
    $("#maincontainer").html(tasks.$el);
  }
});
