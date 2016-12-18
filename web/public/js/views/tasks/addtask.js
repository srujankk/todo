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
    var item = this.ui.taskinput.val();
    this.ui.taskinput.val('');
    var m = new Mapp.TaskModel();
    m.save({'task':item},{
      success:function(t){
        console.log('success');
          Mapp.trigger('ADD_ITEM', t);
      },
        error:function(e){
          console.log(e)
        }
    })
  },
  onEnterPress: function(e){
    if(e.keyCode === 13){
      this.addItem();
    }
  }
});
