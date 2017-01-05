Mapp.Layout = Marionette.View.extend({
  template: "#layoutTemplate",
  regions:{
    appContainer:'#appContainer'
  },
  initialize:function(){
    console.log("Layout init");
    this.listenTo(Mapp, 'HOME', this.home);
    this.listenTo(Mapp, 'TODO', this.showTasks);
    this.listenTo(Mapp, 'KLIMATE', this.showKlimate);
  },
  home:function(){
    console.log('in home');
    var home = new Mapp.Home();
    this.getRegion('appContainer').show(home);
  },
  showTasks: function(){
    console.log('displaying tasks');
    var tasks = new Mapp.Tasks();
    this.getRegion('appContainer').show(tasks);
  },
  showKlimate: function(){
    console.log('displaying climate');
    var klimate = new Mapp.Klimate();
    this.getRegion('appContainer').show(klimate);
  }
});
