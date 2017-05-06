angular.module('angular-spinner-button',[])
.directive('spinnerButton', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: "\
<button ng-disabled='ngDisabled || myProcessing' type='submit' ng-class='myClass' ng-click='click()'> \
  <span ng-transclude></span> \
  <i ng-class='spinnerClass'></i> \
</button> \
",
    scope: {
      myProcessing: '=',
      myClass: '@',
      myIcon: '@',
      ngDisabled: '=',
      myAction: '&'
    },
    link: function(scope, elem, attrs) {
      scope.click = function() {
        if (!scope.myProcessing || !scope.ngDisabled) {
            scope.myAction();
        }
      };

      scope.$watch('myProcessing', function (spin) {
        if (spin) {
          scope.spinnerClass='fa fa-refresh fa-spin';
        } else {
          scope.spinnerClass='fa '+scope.myIcon;
        }
      });
    }
  };
});
