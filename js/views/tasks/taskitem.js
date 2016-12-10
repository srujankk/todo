Mapp.TaskItem = Marionette.View.extend({
  template:'#taskItemTemplate',
  tagName:'li',
  events:{
    'click .taskcheck': 'taskSelected'
  },
  ui:{
    checkItem: '.taskcheck',
    taskitem: '.taskitem'
  },
  className:'list-group-item',
  initialize:function(){
    console.log('TaskList');
    //this.listenTo(this.model,'change:done', this.render);
  },
  onRender: function(){
    var taskStatus = this.model.get('done');
    this.ui.checkItem.prop('checked', taskStatus);
    taskStatus ? this.ui.taskitem.addClass('task-done'): this.ui.taskitem.removeClass('task-done');
  },
  taskSelected: function(){
    //var status = this.model.get('done');
    //this.model.set('done', !status);
    Mapp.trigger('TASK_UPDATE', this.model);
  }
});
