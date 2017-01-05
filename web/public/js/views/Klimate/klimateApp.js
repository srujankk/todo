Mapp.KlimateApp.KlimateApp = Marionette.View.extend({
  template:'#klimateTemplate',
  regions:{
    klimate: "#klimate"
  },
  initialize: function(){
    console.log('klimate initialized');
    Mapp.KlimateApp.appModel = new Mapp.KlimateApp.AppModel();
    this.listenTo(Mapp.KlimateApp.appModel,'sync',this.onLocationSync)
  },
  onRender: function(){
    var findLocation = new Mapp.KlimateApp.FindLocation({
      model:Mapp.KlimateApp.appModel
    });
    findLocation.render();
    this.$el.find('#findLocation').html(findLocation.el);
  },
  onLocationSync:function(m){
    var klimateContent = new Mapp.KlimateApp.KlimateContent();
    this.showChildView('klimate', klimateContent);
  }

});
