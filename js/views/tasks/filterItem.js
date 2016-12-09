Mapp.FilterItem = Marionette.View.extend({
  tagName: 'label',
  className: 'btn btn-primary',
  template: "#filterTemplate",
  events:{
    'click': 'onClick'
  },
  onClick: function(e){
    Mapp.trigger('FILTER', this.model);
  },
  onRender: function(){
    if(this.model.get('selected')){
      this.$el.button('toggle');
      Mapp.trigger('FILTER', this.model);
    }
  }
});
