Mapp.Home = Marionette.View.extend({
  template: "#homeTemplate",
  events:{
    'click #todotasks': 'openTodo'
  },
  initialize: function(){
    console.log('home view');
    var content = "Todo Tasks is a simple Marionette App to display the advantages of backbone and marionette and their usage."
    this.model = new Backbone.Model();
    this.model.set('content',content);
  },
  openTodo: function(){
    Mapp.router.navigate('tasks',{trigger:true});
  }
})
