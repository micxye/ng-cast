angular.module('video-player')

  .component('search', {
    bindings :{
      searchforvideos: '<',
      // query:'<'
    },
    controller : function() {
      this.query = '';
      this.clearquery = () => {
        this.query = '';
      };
    },
    templateUrl: "src/templates/search.html"
  });



