Mapp.KlimateApp.KlimateContentModel = Backbone.Model.extend({
  url: function(){
    var lat = Mapp.KlimateApp.appModel.get('lat'),
    lng = Mapp.KlimateApp.appModel.get('lng');
    return "https://api.darksky.net/forecast/ec2bad2b2f457a24514be25c96e2996a/"+lat+","+lng
  }
});
