'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList'
]);

angular.module("ng1-app",
    [
        "phonecatApp",
        "ngx-hybrid-helper"
    ]);

angular.module("phonecatApp")
    .component("ng1AppRoot", {
        template: '<div ng-view class="view-frame"></div>'
    });
