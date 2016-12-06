Mapp.AddTask = Marionette.View.extend({
  template:"#addTaskTemplate",
  events:{
    'click #addBtn': 'addItem'
  },
  ui:{
    taskinput: '#taskinput'
  },
  initialize:function(){
    console.log('AddTask');
  },
  addItem: function(){
    Mapp.trigger('ADD_ITEM', {'task':this.ui.taskinput.val()});
  }
});
