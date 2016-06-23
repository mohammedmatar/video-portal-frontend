export class VideoListFeatcher{
  constructor($q, $http, $sessionStorage, $sce, $location, $log){
    'ngInject';
    this.$q = $q;
    this.$http  = $http;
    this.$sessionStorage  = $sessionStorage;
    this.$sce = $sce;
    this.$location  = $location;
    this.$log = $log;


  }
  getList(LIMIT = 10, SKIP = 0){
    // this.$log.info(this.$sessionStorage.currentUser.sessionId);
    return this.$http({
      url: 'http://localhost:3000/videos',
      method: 'GET',
      params: {sessionId: this.$sessionStorage.currentUser.sessionId, limit: LIMIT, skip: SKIP}
    }).then((resp)=>{
      return resp.data;
    }, (resp)=>{
      return this.$q.reject(resp.data);
    });
  }
  resolveAsTrustedUrl(url){
    return this.$sce.trustAsResourceUrl(`${this.$location.host()}:${this.$location.port()}/${url}`)
    // let videoList = [];
    // for (let videoInfo of resp.data.data){
    //   videoInfo.url = this.$sce.trustAsResourceUrl(`${this.$location.host()}:${this.$location.port()}/${videoInfo.url}`);
      // this.$log.debug(videoInfo);
      // videoList.push(videoInfo);
    // }
  }
}
