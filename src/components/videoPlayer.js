angular.module('video-player')

.component('videoPlayer', {
  bindings :{
    currentvideo:'<'
  },
  controller:function(){
    // this.url = "https://www.youtube.com/embed/".concat({{$ctrl.name.id.videoId}})  
  },
  // TODO
  templateUrl: "src/templates/videoPlayer.html"
});
