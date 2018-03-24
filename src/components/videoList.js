angular.module('video-player')
.component('videoList', {
  // TODO
  bindings :{
    videos:'<',
    handleclick:'<'
  },

  templateUrl: "src/templates/videoList.html"
});
