(function() {
  'use strict';

  angular
    .module('app.youtube')
    .controller('youtubeSearchCtrl', youtubeSearchCtrl);

  youtubeSearchCtrl.$inject = ['$ionicPlatform', '$log', 'youtubeService'];
  function youtubeSearchCtrl($ionicPlatform, $log, youtubeService) {
    /////////////////////////
    // variable
    /////////////////////////
    var viewModel = this;

    viewModel.listVideos = [];
    viewModel.isAndroid = ionic.Platform.isAndroid();
    /////////////////////////
    // methods
    /////////////////////////
    viewModel.searchVideo = searchVideo;
    viewModel.clearSearchText = clearSearchText;

    /////////////////////////
    // initialize
    /////////////////////////
    initialize();
    /////////////////////////
    // functions
    /////////////////////////
    function initialize() {
      $log.info('initialize youtubeSearchCtrl');
      // do nothing
    }

    function searchVideo() {
      $log.info('searchVideo');

      var keyword = viewModel.searchVideo.szText;
      if (!keyword) {
        $log.info('not keyword');
        return;
      }

      youtubeService.search(keyword)
        .then(function(listVideos) {
          viewModel.listVideos = listVideos;
          $log.info('viewModel.listVideos', viewModel.listVideos);
        });
    }

    function clearSearchText() {
      $log.info('clearVideoSearch');
      viewModel.searchVideo.szText = '';
    }
  }
})();

