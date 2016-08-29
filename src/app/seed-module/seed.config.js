(function() {
    'use strict';

    angular
        .module('seed-module')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider) {

        $stateProvider
        .state('seed-page', {
            url: '/seed-module/seed-page',
            //templateUrl: 'app/seed-module/seed-page.tmpl.html',
            // set the controller to load for this page
            //controller: 'SeedPageController',
            //controllerAs: 'vm',
            // layout-column class added to make footer move to
            // bottom of the page on short pages
            data: {
                layout: {
                    contentClass: 'layout-column'
                }
            },
            views: {
                'root': {
                    templateUrl: 'app/seed-module/seed-page.tmpl.html',
                    controller: 'SeedPageController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
