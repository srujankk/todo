Mapp.KlimateApp.ForecastItem = Marionette.View.extend({
  template:"#forecastItemTemplate"
});

Mapp.KlimateApp.Forecast = Marionette.CollectionView.extend({
  childView: Mapp.KlimateApp.ForecastItem,
  initialize: function(){
    this.listenTo(Mapp.KlimateApp,'DAILY_WEATHER',this.onCurrentWeatherUpdate);
  },
  onCurrentWeatherUpdate: function(c){
    this.collection.reset(c);
  }
})
