export class VideoPlayerController{
  constructor(VideoListFeatcher, $http, $stateParams, $sce, $location, $log){
    'ngInject';
    this.$http  = $http;
    this.VideoListFeatcher = VideoListFeatcher;
    this.$stateParams  = $stateParams;
    this.$sce = $sce;
    this.$location  = $location;
    this.$log = $log;

    this.$http({
      url: 'http://localhost:3000/video',
      method: 'GET',
      params:{
        sessionId: this.$stateParams.sessionId,
        videoId:  this.$stateParams.videoId
      }
    }).then((resp)=>{
      // this.$log.debug(``);
      this.url = `http://${this.$location.host()}:3000/${resp.data.data.url}`;
      this.desc = resp.data.data.description;
      this.name = resp.data.data.name;
      this._id  = resp.data.data._id;
      this.ratings = resp.data.data.ratings;

    });

  }
  $onInit(){

  }
  getVideoUrl(url){
    this.VideoListFeatcher.resolveAsTrustedUrl(url);
  }
}
