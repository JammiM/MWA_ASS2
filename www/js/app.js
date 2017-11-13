var app = angular.module('todoApp', ['ionic', 'LocalStorageModule']);

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

  app.config(function($stateProvider, $urlRouterProvider, localStorageServiceProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../partials/home.html',
        controller: 'todoCtrl'
      })

      .state('todo', {
        url: '/todo',
        templateUrl: '../partials/todos.html',
        controller: 'todoCtrl'
      });


    $urlRouterProvider.otherwise('/');


    // Adds the prefix 'james-todo' to each todos in Local Storage (Helps idedntifies them)
    localStorageServiceProvider.setPrefix('james-todo');

  });
