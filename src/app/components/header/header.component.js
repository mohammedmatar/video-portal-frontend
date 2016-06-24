export class HeaderComponentController {
  constructor(AuthService){
    'ngInject';
    this.AuthService  = AuthService;
  }
  logout(){
    this.AuthService.logout();
  }

}
