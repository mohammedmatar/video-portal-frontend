/* global */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './pages/login/login.controller';

// import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ToastService } from  '../app/services/ToastService/ToastService.service';
// import { NavbarDirective } from '../app/components/navbar/navbar.directive';
// import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'toastr'])
  // .constant('malarkey', malarkey)
  // .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('ToastService', ToastService)
  // .service('webDevTec', WebDevTecService)


  .controller('MainController', MainController)
  .controller('LoginController', LoginController)


  // .directive('acmeNavbar', NavbarDirective)
  // .directive('acmeMalarkey', MalarkeyDirective);