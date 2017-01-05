Mapp.KlimateApp.ForecastModel = Backbone.Model.extend({
  defaults:{
    temperatureMax:'',
    temperatureMin:'',
    icon:''
  }
});

Mapp.KlimateApp.ForecastCollection = Backbone.Collection.extend({
  model:Mapp.KlimateApp.ForecastModel
})
