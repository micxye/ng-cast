angular.module('video-player')
.component('videoListEntry', {
  bindings :{
    video:'<',
    handleclick:'<'
  },
  // TODO


  templateUrl: "src/templates/videoListEntry.html"
});
