angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: "src/templates/app.html",

  controller: function(youTube) { 
    this.videos = [];
    this.currentVideo = null;

    this.changeVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    }
    this.changeVideos = this.changeVideos.bind(this)

    youTube.search({
      key:  window.YOUTUBE_API_KEY,
      max: 5,
      query: ''
    }).then(function (response) {
      this.changeVideos(response.items)
    }, function (err) {
      console.log(err);
    });    
    //call youtube.search
    //youtube.search returns a promise
    //On promise, use .then() function 
    //Use success callback to set this.videos


    this.handleClick = (video) => {
      this.currentVideo = video
    };
  }

  

});
