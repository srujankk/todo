Mapp.TaskFilterModel = Backbone.Model.extend({
  defaults:{
    'selected': false
  }
});

Mapp.TaskFilterCollection = Backbone.Collection.extend({
  model: Mapp.TaskFilterModel
})
