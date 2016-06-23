
export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';

  let getView  = (viewName) => {
    return `app/pages/${viewName}/${viewName}.page.html`;
  };
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('login', {
      url: '/login',
      templateUrl: getView('login'),
      controller: 'LoginController',
      controllerAs: 'login'
    })
  ;

  $urlRouterProvider.otherwise('/');
}
