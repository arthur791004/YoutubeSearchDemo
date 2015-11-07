(function() {
  'use strict';

  var dependencies = [
    'ionic',
    'pascalprecht.translate',
    'youtube-embed'
  ];

  angular
    .module('app.youtube', dependencies)
    .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('youtubeSearch', {
          url: '/youtubeSearch',
          templateUrl: 'modules/youtube/youtube-search.html',
          controller: 'youtubeSearchCtrl',
          controllerAs: 'viewModel'
        })

      $urlRouterProvider.otherwise('/youtubeSearch');
    }
})();
