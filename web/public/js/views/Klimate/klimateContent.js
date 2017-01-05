Mapp.KlimateApp.KlimateContent = Marionette.View.extend({
  template:"#klimateContentTemplate",
  regions:{
    currentWeather:"#currentWeather",
    forecastWeather:"#forecastWeather"
  },
  initialize: function(){
    var klimateContentModel = new Mapp.KlimateApp.KlimateContentModel();
    this.model = klimateContentModel;
    this.listenTo(this.model,'sync', this.onModelSync)
    klimateContentModel.fetch({
      dataType:'jsonp'
    })
  },
  onModelSync: function(){
    Mapp.KlimateApp.trigger('CURRENT_WEATHER',this.model.get('currently'));
    Mapp.KlimateApp.trigger('DAILY_WEATHER',this.model.get('daily').data);
  },
  onRender: function(){
    var currentModel = new Mapp.KlimateApp.CurrentWeatherModel();
    var currentWeather = new Mapp.KlimateApp.CurrentWeather({
      model:currentModel
    });
    this.showChildView('currentWeather',currentWeather);
    var forecast = new Mapp.KlimateApp.ForecastCollection();
    var forecastWeather = new Mapp.KlimateApp.Forecast({
      collection:forecast
    });
    this.showChildView('forecastWeather',forecastWeather);

  }
})
