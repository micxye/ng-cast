angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: "src/templates/app.html",

  controller: function(youTube) { 
    // this.query = '';
    this.videos = [];
    this.currentVideo = null;

    this.changeVideos = (videos) => {
      this.videos = videos;
      this.currentVideo = videos[0];
    }


    //call youtube.search
    //youtube.search returns a promise
    //On promise, use .then() function 
    //Use success callback to set this.videos


    this.handleClick = (video) => {
      this.currentVideo = video
    };

    this.searchForVideos = (searchquery) => {
      var options = {
        key:  window.YOUTUBE_API_KEY,
        max: 5,
        query: searchquery
      }
      console.log(options)
      youTube.search(options).then((response) => {console.log(response);this.changeVideos(response.data.items)},
      (err) => {console.log(err)});  
    }

    this.searchForVideos('')
  }
});
