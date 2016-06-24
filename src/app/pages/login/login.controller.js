/**
 * Created by mohammed on 6/23/16.
 */

export class LoginController {
  constructor(AuthService, ToastService, $sessionStorage, $state){
    'ngInject';

    this.AuthService = AuthService;
    this.ToastService = ToastService;
    this.$sessionStorage = $sessionStorage;
    this.$state = $state;
  }
  $onInit(){
    this.username = '';this.password = '';
  }
  login(){
    let user = {
      username: this.username,
      password: this.password
    };
    let authResp =  this.AuthService.authenticate(user);
    authResp.then((data)=>{
      if(data.data.status === 'error'){
        this.ToastService.error('incorrect', 'df');
      }else if(data.data.status === 'success'){
        this.$sessionStorage.currentUser = {
          sessionId: data.data.sessionId,
          username:  data.data.username
        };
        this.ToastService.success('Welcome you ', data.data.username);
        this.$state.go('dashboard');
      }
    });
    this.username = '';this.password = '';
  }//login
}

