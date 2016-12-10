Mapp.TaskModel = Backbone.Model.extend({
  defaults:{
    'done':false
  }
});

Mapp.TasksCollection = Backbone.Collection.extend({
  model: Mapp.TaskModel,
  initialize: function(options){
    this.org = options || [];
    this.listenTo(Mapp,'FILTER', this.filterTask);
    this.listenTo(Mapp,'TASK_UPDATE', this.updateTask);
  },
  isUnique: function(t){
    return _.findWhere(this.org,t)?false:true
  },
  addTask: function(t){
    if(!this.isUnique(t)){
      return;
    }
    this.org.push(t);
    this.filterTask();
  },
  updateTask:function(m){
    var idx = _.findIndex(this.org,function(o){
      return o.task === m.get('task');
    })
    this.org[idx].done = !m.get('done');
    this.filterTask();
  },
  filterTask: function(m){
    this.filterState = m?m.get('status'):this.filterState;
    var filteredSet;
    switch(this.filterState){
      case 'all':
        filteredSet = this.org;
        break;
      case true:
        filteredSet = _.filter(this.org, function(m){
          return m.done;
        });
        break;
      case false:
        filteredSet = _.filter(this.org,function(m){
          return !m.done;
        });
        break;
    }
    this.reset(filteredSet);
  }
})
