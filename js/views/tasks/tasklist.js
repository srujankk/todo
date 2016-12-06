Mapp.TaskList = Marionette.CollectionView.extend({
  childView: Mapp.TaskItem,
  tagName:'ul',
  className:'list-group task-list',
  initialize:function(){
    console.log('TaskList');
    this.listenTo(Mapp, 'ADD_ITEM', this.addItem);
  },
  addItem: function(t){
    this.collection.add(t);
  }
});
