(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService () {
        var service = this;

        var toBuyItems = [
            {name: "black leather jacket", quantity: 1 },
            {name: "olive bomber jacket", quantity: 1 },
            {name: "tailored blazer", quantity: 2 },
            {name: "slim-fit trousers", quantity: 2 },
            {name: "suede chelsea boots", quantity: 1 }
        ];

        var boughtItems =[];

        service.buyItem = function (itemIndex) {
            var item = toBuyItems[itemIndex];
            boughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function (){
            return toBuyItems;
        };

        service.getBoughtItems = function (){
            return boughtItems;
        };
    }

})();