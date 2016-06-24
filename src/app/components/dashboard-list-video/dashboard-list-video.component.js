export class DashboardListVideoController{
  constructor(VideoListFeatcher, $sessionStorage, $log, $window){
    'ngInject';
    this.VideoListFeatcher  = VideoListFeatcher;
    this.loaderBusy = true;
    this.sessionId  =   $sessionStorage.currentUser.sessionId;
    // this.$sce = $sce;
    this.$log = $log;
    this.$window   =  $window;
    this.videoList = [];
    // $log.debug(VideoListFeatcher.getList());
  }
  $onInit(){
    this.VideoListFeatcher.getList().then((resp)=>{
      this.videoList = resp.data;
      this.loaderBusy = false;
    });
  }
  updateVideoList(){
    this.loaderBusy = true;
    this.VideoListFeatcher.getList(10, this.videoList.length).then((resp)=>{
      this.videoList.push.apply(this.videoList, resp.data);
      // this.$log.debug(resp.data);
      this.loaderBusy = false;
    });
  }
  getUrl(url){
    return this.VideoListFeatcher.resolveAsTrustedUrl(url);
  }
}
