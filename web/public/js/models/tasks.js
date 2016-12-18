Mapp.TaskModel = Backbone.Model.extend({
  defaults:{
    'done':false
  },
    idAttribute:'_id',
    urlRoot: "http://localhost:3333/tasks"
});

Mapp.FilteredTasksCollection = Backbone.Collection.extend({
    model:Mapp.TaskModel,
    initialize:function(){
        this.listenTo(Mapp,'UPDATE_FILTERED_TASKS',this.filterTask);
    },
    filterTask:function(c,m){
        this.filterState = m?m.get('status'):this.filterState;
        var filteredSet,
            col = c.toJSON();

        switch(this.filterState){
            case 'all':
                filteredSet = col;
                break;
            case true:
                filteredSet = _.filter(col, function(m){
                    return m.done;
                });
                break;
            case false:
                filteredSet = _.filter(col,function(m){
                    return !m.done;
                });
                break;
        }
        this.reset(filteredSet);
    }
})

Mapp.TasksCollection = Backbone.Collection.extend({
  model: Mapp.TaskModel,
    url:"http://localhost:3333/tasks",
  initialize: function(options){
      this.listenTo(this,'sync', this.updateOrg);
      this.listenTo(Mapp, 'ADD_ITEM', this.addTask);
      this.listenTo(Mapp,'FILTER', this.filterTask);
      this.listenTo(Mapp,'TASK_UPDATE', this.updateTask);
  },

    updateOrg: function(c){
        Mapp.trigger('UPDATE_FILTERED_TASKS',this);
    },
  isUnique: function(t){
    return _.findWhere(this.toJSON(),t)?false:true;
  },
  addTask: function(t){
      this.add(t);
  },
  updateTask:function(m){
     //var taskToUpdate = this.findWhere({'_id':m.get('_id')});
    //taskToUpdate.set('done', m.get('done'));
    //this.set(taskToUpdate,{remove:false});
      this.fetch();
  },
  filterTask: function(m){
      Mapp.trigger('UPDATE_FILTERED_TASKS',this,m);
  }
})
