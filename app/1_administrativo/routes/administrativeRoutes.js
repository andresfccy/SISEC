'use strict';
accountModule.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('administrativeHome', {
                url: '/Administrativo',
                templateUrl: 'app/1_administrativo/views/1_index.html',
                controller: 'administrative.administrativeController as admCtrl'
            })
    }
]);