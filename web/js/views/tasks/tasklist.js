Mapp.TaskList = Marionette.CollectionView.extend({
  childView: Mapp.TaskItem,
  tagName:'ul',
  className:'list-group task-list',
  initialize:function(){
    console.log('TaskList');
  }
});
