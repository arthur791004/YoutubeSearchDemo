(function() {
  'use strict';

  angular
    .module('app.youtube')
    .factory('youtubeService', youtubeService);

  youtubeService.$inject = ['$q', '$http', '$log', 'CONST_YOUTUBE'];
  function youtubeService($q, $http, $log, CONST_YOUTUBE) {
    /////////////////////////
    // variable
    /////////////////////////
    var videos = [];
    var searchConfig = {
      params: CONST_YOUTUBE.DEFAULT_PARAMS
    };
    /////////////////////////
    // services
    /////////////////////////
    var services = {
      search: search
    };
    return services;
    ////////////////////
    // functions
    ////////////////////
    function search(keyword) {
      var deferred = $q.defer();

      videos = [];
      searchConfig.params.q = keyword;
      $http.get(CONST_YOUTUBE.API_SEARCH, searchConfig)
        .success(function(response) {
          angular.forEach(response.items, function(video) {
            videos.push(video);
            $log.debug('add video', video, videos);
          });
          deferred.resolve(videos);
        });

      return deferred.promise;
    }
  }
})();
