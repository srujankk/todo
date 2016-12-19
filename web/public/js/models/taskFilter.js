Mapp.TaskFilterModel = Backbone.Model.extend({
  defaults:{
    'selected': false
  }
});

Mapp.TaskFilterCollection = Backbone.Collection.extend({
  model: Mapp.TaskFilterModel,
  initialize:function(){
    console.log('initialize');
    this.listenTo(Mapp,'FILTER', this.filterTask);
  },
  filterTask: function(){
    console.log('filter');
  }
})
