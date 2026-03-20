(function () {
  'use strict';

  angular
    .module('MenuApp')
    .component('categories', {
      template:
        '<div>' +
          '<div ng-if="$ctrl.items && $ctrl.items.length" class="grid categories-grid">' +
            '<a class="card link-card" ' +
               'ng-repeat="category in $ctrl.items track by category.short_name" ' +
               'ui-sref="items({ categoryShortName: category.short_name })">' +
              '<div class="badge">Category</div>' +
              '<h3 class="card-title">{{ category.name }}</h3>' +
              '<p class="card-subtitle">Short name: {{ category.short_name }}</p>' +
              '<p class="card-text">{{ category.special_instructions || "No special instructions available." }}</p>' +
            '</a>' +
          '</div>' +

          '<div ng-if="!$ctrl.items || !$ctrl.items.length" class="empty-state">' +
            '<h3>No categories found</h3>' +
            '<p class="muted">Please try again later.</p>' +
          '</div>' +
        '</div>',
      bindings: {
        items: '<'
      }
    });
})();