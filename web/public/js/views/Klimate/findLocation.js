Mapp.KlimateApp.FindLocation = Marionette.View.extend({
  template:"#locationTemplate",
  ui:{
    locationinput : '#locationinput'
  },
  events:{
    'click #findBtn': 'getLocation',
    'keypress #locationinput': 'onEnterPress'
  },
  onEnterPress: function(e){
    if(e.keyCode === 13){
      this.getLocation();
    }
  },
  getLocation: function(){
    this.model.set('address', this.ui.locationinput.val());
    Mapp.KlimateApp.appModel.fetch();
  }
})
