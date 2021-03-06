angular
  .module('app')
  .config(routesConfig);

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('order', {
      url: '/',
      component: 'order',
      resolve: {
        services: function (OrderService) {
          return OrderService.listServices().$promise;
        }
      }
    })
    .state('order-list', {
      url: '/orders',
      component: 'orderList',
      resolve: {
        orders: function (OrderService) {
          return OrderService.list().$promise;
        }
      }
    });
}
