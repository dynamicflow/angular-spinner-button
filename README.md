# angular-spinner-button

This repo is for distribution on  `bower`. The source for this module is in the
[main angular-spinner-button repo](https://github.com/dynamicflow/angular-spinner-button).
Please file issues and pull requests against that repo.

## Install

You can install this package with `bower`.

```shell
bower install angular-spinner-button
```

Then add a `<script>` to your `index.html`:

```html
<script src="/bower_components/angular-spinner-button/spinner-button.directive.js"></script>
```

## Usage

You can use this button in any form to execute long running backend tasks, actually I use it a lot
when submitting forms and calling $resource operations.

The attributes available are:
* my-processing: as a controller variable that computes to a boolean value to indicate if the action triggered by the button is executing,
* my-class: the class that will be used in the button,
* my-icon: the font awesome class that will be used before and after the action finishes,
* my-action: the controller operation that will be called on button click,
* ng-disabled: can be used in order to disable a button based on external logic,


### Sample Code

Spinner button template usage:
```html
 <spinner-button my-icon="fa-play-circle" my-processing="processing" my-class="btn btn-success"
                 my-action="click()">EXECUTE</spinner-button>
```


The simplest code in a controller used to simulate a real life scenario:
```javascript
$scope.processing = false;

$scope.click = function() {
    $scope.processing = true;

    // long running task
    $timeout(function() {
        $scope.processing = false;
    },5000);
}
```