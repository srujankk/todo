var Mapp = {};
Mapp.KlimateApp = {};

Mapp.Router = Backbone.Router.extend({
  routes:{
    '':'home',
    'tasks':'showTasks',
    'klimate': 'showKlimate',
  },
  home:function(){
    console.log('in home');
    Mapp.trigger('HOME');
    // var home = new Mapp.Home();
    // home.render();
    // $("#maincontainer").html(home.$el);
  },
  showTasks: function(){
    console.log('displaying tasks');
    Mapp.trigger('TODO');
    // var tasks = new Mapp.Tasks();
    // tasks.render();
    // $("#maincontainer").html(tasks.$el);
  },
  showKlimate: function(){
    console.log('display climate');
    Mapp.trigger('KLIMATE');
  }
});
