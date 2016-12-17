/*

 OriginalCollection
 TaskCollection

 tasks has instances of both Collections

 OriginalCollection makes a fetch call
 OriginalCollection triggers tasks_updated event
 taskCollection listens to the event tasks_updated
 taskCollection gets the selected filter option and filters
 taskCollection then resets itself with filtered collection

 OriginalCollection listens to ADD_TASK event
 OriginalCollections adds the model from the event
 OriginalCollection triggers tasks_updated event
 taskCollection listens to the event tasks_updated
 taskCollection gets the selected filter option and filters
 taskCollection then resets itself with filtered collection

 OriginalCollection listens to TASK_STATUS_CHANGE
 OriginalCollection updates the status change to the appropriate model
 OriginalCollection triggers tasks_updated event
 taskCollection listens to the event tasks_updated
 taskCollection gets the selected filter option and filters
 taskCollection then resets itself with filtered collection

 */


Mapp.TaskModel = Backbone.Model.extend({
  defaults:{
    'done':false
  }
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
    url:"http://localhost:3000/tasks",
  initialize: function(options){
      this.org = options || [];
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
    if(!this.isUnique(t)){
      return;
    }
    this.add(t);
    Mapp.trigger('UPDATE_FILTERED_TASKS',this);
  },
  updateTask:function(m){
     var taskToUpdate = this.findWhere({'task':m.get('task')});
    taskToUpdate.set('done', !m.get('done'));
    this.set(taskToUpdate,{remove:false});
      Mapp.trigger('UPDATE_FILTERED_TASKS',this);
  },
  filterTask: function(m){
      Mapp.trigger('UPDATE_FILTERED_TASKS',this,m);
  }
})
