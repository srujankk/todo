Mapp.FilterTask = Marionette.CollectionView.extend({
  childView: Mapp.FilterItem,
  tagName: 'div',
  className: 'btn-group',
  attributes:{
    'data-toggle':'buttons'
  },
  initialize:function(options){
    console.log('Filter task');
  }
})
