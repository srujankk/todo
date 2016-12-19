Mapp.TaskItem = Marionette.View.extend({
  template:'#taskItemTemplate',
  tagName:'li',
  events:{
    'click .taskcheck': 'taskSelected',
    'click .close': 'onClose'
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
  onClose:function(){
    this.model.destroy();
  },
  taskSelected: function(){
    var status = this.model.get('done');
    this.model.set('done', !status);
      this.model.save(null,{
        success:function(d){
          console.log(d);
            Mapp.trigger('TASK_UPDATE', this.model);
        },
          error:function(e){
            console.log(e);
          },
          context:this
      });

  }
});
