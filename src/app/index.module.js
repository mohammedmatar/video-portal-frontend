/* global */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { LoginController } from './pages/login/login.controller';
import { DashboardController } from './pages/dashboard/dashboard.controller';
import { VideoPlayerController } from './pages/video_player/video_player.controller';

import { HeaderComponentController } from '../app/components/header/header.component';
import { DashboardListVideoController } from '../app/components/dashboard-list-video/dashboard-list-video.component';
import { RatePickerController } from '../app/components/ratepicker/ratepicker.component';
import { RatingComponentController } from '../app/components/rating/rating.component.js';

// import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { ToastService } from  '../app/services/ToastService/ToastService.service';
import { AuthService }   from  '../app/services/Auth/Auth.service';
import { VideoListFeatcher }   from  '../app/services/VideoListFeatcher/VideoListFeatcher.service';


angular.module('app', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'toastr', 'angular-md5', 'ngStorage', 'infinite-scroll', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.buffering', 'com.2fdevs.videogular.plugins.overlayplay'])
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
  .controller('VideoPlayerController', VideoPlayerController)

  .component('headerSection', {
    templateUrl: './app/components/header/header.component.html',
    controller: HeaderComponentController,
    controllerAs: '$ctrl'
  })
  .component('dashboardListVideo', {
    templateUrl: './app/components/dashboard-list-video/dashboard-list-video.component.html',
    controller: DashboardListVideoController
  })
  .component('rating', {
    templateUrl: '../app/components/rating/rating.component.html',
    controller: RatingComponentController,
    bindings: {
      ratings: '='
    }
  })
  .component('ratePicker', {
    templateUrl: '../app/components/ratepicker/ratepicker.component.html',
    controller: RatePickerController,
    controllerAs: 'vm',
    bindings: {
      videoId: '='
    }
  })
;

  // .directive('acmeNavbar', NavbarDirective)
  // .directive('acmeMalarkey', MalarkeyDirective);
