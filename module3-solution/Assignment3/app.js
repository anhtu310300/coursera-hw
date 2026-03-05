(function (){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service("MenuSearchService",MenuSearchService)
  .directive("foundItems",FoundItemDirective);


  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var ctrl = this;
    ctrl.searchTerm ="";
    ctrl.found = [];
    
    ctrl.narrow = function () {
      var term = (ctrl.searchTerm || "").trim();
      if (!term) {
        ctrl.found.push({
          
        });
        return;
      }

      MenuSearchService.getMatchedMenuItems(term)
      .then(function (items){
        ctrl.found = items;
      });
    }
    
    ctrl.removeItem = function (index) {
      ctrl.found.splice(index,1);
    }
  }


  MenuSearchService.$inject =["$http"];
  function MenuSearchService($http) {
    var service = this;
    var API_URL = "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json";

    service.getMatchedMenuItems = function (searchTerm) {
      var term = searchTerm.toLowerCase();

      return $http({
        method:"GET", 
        url:API_URL
      }).then(function (result){
        var data = result.data;
        var foundItems = [];

        for (var category in data) {
          if (!data.hasOwnProperty(category)) continue;
          var items = data[category].menu_items;
          

          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var desc = (item.description || "").toLowerCase();
            if (desc.indexOf(term) !== -1){
              foundItems.push(item);
            }
          }
        }
        return foundItems;
      })
    };
  }

  function FoundItemDirective(){
    return {
      restrict: "E",
      templateUrl: "foundItems.html",
      scope: {
        foundItems: "<",
        onRemove: "&"
      }
    };
  }

  
}) ();