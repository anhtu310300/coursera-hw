(function () {
  'use strict';

  angular
    .module('data')
    .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http) {
    var service = this;
    var basePath = 'https://coursera-jhu-default-rtdb.firebaseio.com';

    service.getAllCategories = function () {
      return $http({
        method: 'GET',
        url: basePath + '/categories.json'
      });
    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: 'GET',
        url: basePath + '/menu_items/' + categoryShortName + '.json'
      });
    };
  }
})();