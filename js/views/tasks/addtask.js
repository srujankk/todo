Mapp.AddTask = Marionette.View.extend({
  template:"#addTaskTemplate",
  events:{
    'click #addBtn': 'addItem',
    'keypress #taskinput': 'onEnterPress'
  },
  ui:{
    taskinput: '#taskinput'
  },
  initialize:function(){
    console.log('AddTask');
  },
  addItem: function(){
    Mapp.trigger('ADD_ITEM', {'task':this.ui.taskinput.val()});
    this.ui.taskinput.val('');
  },
  onEnterPress: function(e){
    if(e.keyCode === 13){
      this.addItem();
    }
  }
});
