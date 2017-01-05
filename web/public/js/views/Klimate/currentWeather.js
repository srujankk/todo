Mapp.KlimateApp.CurrentWeather = Marionette.View.extend({
  template: "#currentTemplate",
  initialize: function(){
    this.listenTo(Mapp.KlimateApp,'CURRENT_WEATHER',this.onCurrentWeatherUpdate);
    this.listenTo(this.model,'change',this.render);
  },
  onCurrentWeatherUpdate: function(m){
    this.model.set(m);
  }
})
