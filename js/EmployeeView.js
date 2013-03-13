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
  };

  this.initialize();

  this.render = function() {
      this.el.html(EmployeeView.template(employee));
      return this;
  };

}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());
