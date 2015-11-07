(function() {
  'use strict';

  var CONST_YOUTUBE = {
    API_SEARCH: 'https://www.googleapis.com/youtube/v3/search',
    DEFAULT_PARAMS: {
      key: '<your api key>',
      type: 'video',
      maxResults: '10',
      part: 'id,snippet',
      order: 'date',
    }
  };

  angular
    .module('app.youtube')
    .constant('CONST_YOUTUBE', CONST_YOUTUBE)

})();