Mapp.EmptyView = Marionette.View.extend({
  template: "#emptyTaskList"
});

Mapp.TaskList = Marionette.CollectionView.extend({
  childView: Mapp.TaskItem,
  emptyView: Mapp.EmptyView,
  tagName:'ul',
  className:'list-group task-list',
  initialize:function(){
    console.log('TaskList');
  }
});
