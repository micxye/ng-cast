angular.module('video-player')
.service('youTube', function(){
  // TODO
  this.search = (options) => {
    return $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: options.key,
        maxResults: options.max,
        q: options.query,
        videoEmbeddable: 'true',
        type: 'video'
      }
    })
  }
});





