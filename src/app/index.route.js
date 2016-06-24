
export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  let getView  = (viewName) => {
    return `app/pages/${viewName}/${viewName}.page.html`;
  };
  $stateProvider
    // .state('home', {
    //   url: '/',
    //   templateUrl: 'app/main/main.html',
    //   controller: 'MainController',
    //   controllerAs: 'main'
    // })
    .state('login', {
      url: '/login',
      templateUrl: getView('login'),
      controller: 'LoginController',
      controllerAs: 'vm',
      resolve: {
        skipIfAuthenticated: _skipIfAuthenticated
      }
    })
    .state('dashboard', {
      url: '/',
      templateUrl: getView('dashboard'),
      controller: 'DashboardController',
      controllerAs: 'vm',
      resolve: {
        redirectIfNotAuthenticated: _redirectIfNotAuthenticated
      }
    })
    .state('play', {
      url: '/play/:sessionId/:videoId',
      templateUrl: getView('video_player'),
      controller: 'VideoPlayerController',
      controllerAs: 'vm',
      resolve: {
        redirectIfNotAuthenticated: _redirectIfNotAuthenticated
      }
    })

  ;

  $urlRouterProvider.otherwise('/');
}

function _skipIfAuthenticated($q, $state, AuthService) {

  var defer = $q.defer();
  if(AuthService.isLogin()) {
    defer.reject(); /* (1) */
  } else {
    defer.resolve(); /* (2) */
  }
  return defer.promise;
}

function _redirectIfNotAuthenticated($q, $state, AuthService, $timeout) {
  var defer = $q.defer();
  if(AuthService.isLogin()) {
    defer.resolve(); /* (3) */
  } else {
    $timeout(function () {
      $state.go('login'); /* (4) */
    });
    defer.reject();
  }
  return defer.promise;
}
