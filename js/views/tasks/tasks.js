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

    var task_json = [
      {'task':'Default 1','done':true},
      {'task':'Default 2'}
    ]

    var tasks = new Mapp.TasksCollection(task_json);
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
      collection:filterCollection
    });
    filterView.render();
    this.$el.find("#taskFilter").html(filterView.$el);
  }
});
