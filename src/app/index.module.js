/* global */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './pages/login/login.controller';
import { DashboardController } from './pages/dashboard/dashboard.controller';

import { HeaderComponentController } from '../app/components/header/header.component';
import {DashboardListVideoController } from '../app/components/dashboard-list-video/dashboard-list-video.component';

// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ToastService } from  '../app/services/ToastService/ToastService.service';
import {AuthService }   from  '../app/services/Auth/Auth.service';
import { VideoListFeatcher }   from  '../app/services/VideoListFeatcher/VideoListFeatcher.service';

// import { NavbarDirective } from '../app/components/navbar/navbar.directive';
// import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'toastr', 'angular-md5', 'ngStorage', 'infinite-scroll', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.buffering'])
  // .constant('malarkey', malarkey)
  // .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('ToastService', ToastService)
  .service('AuthService', AuthService)
  .service('VideoListFeatcher', VideoListFeatcher)
  // .service('webDevTec', WebDevTecService)


  .controller('MainController', MainController)
  .controller('LoginController', LoginController)
  .controller('DashboardController', DashboardController)
  .component('headerSection', {
    templateUrl: './app/components/header/header.component.html',
    controller: HeaderComponentController,
    controllerAs: '$ctrl'
  })
  .component('dashboardListVideo', {
    templateUrl: './app/components/dashboard-list-video/dashboard-list-video.component.html',
    controller: DashboardListVideoController
  })
;

  // .directive('acmeNavbar', NavbarDirective)
  // .directive('acmeMalarkey', MalarkeyDirective);
