export class RatePickerController{
  constructor($http, $sessionStorage, ToastService){
    'ngInject';
    this.$http = $http;
    this.$sessionStorage = $sessionStorage;
    this.ToastService = ToastService;
  }
  postClientRate(rateValue){
    this.rate = rateValue;
    this.$http({
      url: `http://localhost:3000/ratings?sessionId=${this.$sessionStorage.currentUser.sessionId}`,
      method: 'POST',
      data: {
        rating: rateValue,
        videoId: this.videoId
      }
    }).then((resp)=>{
      if (resp.data.status === 'success'){
        this.ToastService.success("Done !", "Thank you For Rating .");
      }else{
        this.ToastService.success("OOPS *__* ", "there is an error try later, please !");
      }
    });
  }
}
