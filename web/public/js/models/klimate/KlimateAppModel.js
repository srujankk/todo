Mapp.KlimateApp.AppModel = Backbone.Model.extend({
  url: function(){
    return "https://maps.googleapis.com/maps/api/geocode/json?address="+this.get('address')+"&key=AIzaSyAkwNfiWJJ1QV133IswX6LLgMtwfB1kddo";
  },
  parse : function(response) {
    var results = response.results[0];
    return {'formatted_address':results.formatted_address,lat:results.geometry.location.lat,lng:results.geometry.location.lng};
  }
});
