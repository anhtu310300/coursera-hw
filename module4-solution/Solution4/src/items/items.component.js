(function () {
  'use strict';

  angular
    .module('MenuApp')
    .component('items', {
      template:
        '<div>' +
          '<div ng-if="$ctrl.items && $ctrl.items.length" class="grid items-grid">' +
            '<div class="card" ng-repeat="item in $ctrl.items track by $index">' +
              '<div class="meta-row">' +
                '<span class="meta-pill">#{{ item.short_name }}</span>' +
                '<span class="meta-pill" ng-if="item.small_portion_name">{{ item.small_portion_name }}</span>' +
                '<span class="meta-pill" ng-if="item.large_portion_name">{{ item.large_portion_name }}</span>' +
              '</div>' +
              '<h3 class="card-title">{{ item.name }}</h3>' +
              '<p class="card-text">{{ item.description || "No description available." }}</p>' +

              '<div class="item-price" ng-if="item.price_small">Small: ${{ item.price_small }}</div>' +
              '<div class="item-price" ng-if="item.price_large">Large: ${{ item.price_large }}</div>' +
              '<div class="item-price" ng-if="!item.price_small && !item.price_large">Price not listed</div>' +
            '</div>' +
          '</div>' +

          '<div ng-if="!$ctrl.items || !$ctrl.items.length" class="empty-state">' +
            '<h3>No items found</h3>' +
            '<p class="muted">This category does not have menu items yet.</p>' +
          '</div>' +
        '</div>',
      bindings: {
        items: '<'
      }
    });
})();