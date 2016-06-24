export class HeaderComponentController {
  constructor(AuthService, $state, $window, $log){
    'ngInject';
    this.AuthService  = AuthService;
    this.$state = $state;
    this.$window  = $window;
    this.$log = $log;

    this.showMenu = false;
  }
  logout(){
    this.AuthService.logout();
  }
  goToState(stateName = ''){
    this.$state.go(stateName);
  }
  goToWebsite(website){
    this.$log.debug('clicked');
    this.$window.open(website, '_blank');
  }
}
