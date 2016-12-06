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

    var tasks = new Mapp.TasksCollection();
    var tasklist = new Mapp.TaskList({
      collection: tasks
    });
    tasklist.render();
    this.$el.find('#taskList').html(tasklist.$el);
  }
});
