Mapp.TaskModel = Backbone.Model.extend({
  defaults:{
    'done':false
  }
});

Mapp.TasksCollection = Backbone.Collection.extend({
  model: Mapp.TaskModel
})
