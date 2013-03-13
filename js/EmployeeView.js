/**
 * Created with IntelliJ IDEA.
 * User: torbjornk
 * Date: 13.03.13
 * Time: 15:29
 * To change this template use File | Settings | File Templates.
 */
var EmployeeView = function(employee) {

  this.initialize = function() {
      this.el = $('<div/>');
      this.el.on('click', '.add-location-btn', this.addLocation(event));
  };

  this.initialize();

  this.render = function() {
      this.el.html(EmployeeView.template(employee));
      return this;
  };

  this.addLocation = function(event) {
      event.preventDefault();
      console.log('addLocation');
      navigator.geolocation.getCurrentPosition(
          function(position) {
              $('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
          },
          function() {
              alert('Error getting location');
          });
      return false;
  };

}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());
