
angular.module('your_app_name.filters', [])

.filter('rawHtml', ['$sce', function($sce){
  return function(val) {
    var display = $sce.trustAsHtml(val);
    return display;
  };
}]);
