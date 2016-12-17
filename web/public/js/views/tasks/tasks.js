Mapp.Tasks = Marionette.View.extend({
  template:"#taskTemplate",
  initialize: function(){
    console.log('initialized');
  },
  onRender: function(){
    var addTask = new Mapp.AddTask();
    addTask.render();
    console.log('rendering addTask');
    this.$el.find('#addtask').html(addTask.$el);

      var alltasks = new Mapp.TasksCollection();
      var tasks = new Mapp.FilteredTasksCollection();
      alltasks.fetch();
    var tasklist = new Mapp.TaskList({
      collection: tasks
    });
    tasklist.render();
    this.$el.find('#taskList').html(tasklist.$el);

    var filters = [
      {'filterTitle':'All','status':'all','selected':true},
      {'filterTitle':'Pending','status':false},
      {'filterTitle':'Completed','status':true}
    ];
    var filterCollection = new Mapp.TaskFilterCollection(filters);
    var filterView = new Mapp.FilterTask({
      collection:filterCollection,
    });
    filterView.render();
    this.$el.find("#taskFilter").html(filterView.$el);
  }
});
