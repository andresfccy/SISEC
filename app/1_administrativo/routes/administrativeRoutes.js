'use strict';
accountModule.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('administrativeHome', {
                url: '/Administrativo',
                templateUrl: 'app/1_administrativo/views/1_index.html',
                controller: 'administrative.administrativeController as admCtrl'
            })
            .state('administrativeHome.schedules', {
                templateUrl: 'app/1_administrativo/views/1_1_schedules.edit.html',
            })
            .state('administrativeHome.classrooms', {
                templateUrl: 'app/1_administrativo/views/1_2_classrooms.edit.html',
            })
            .state('administrativeHome.users', {
                templateUrl: 'app/1_administrativo/views/1_3_users.edit.html',
            })
            .state('administrativeHome.students', {
                templateUrl: 'app/1_administrativo/views/1_4_students.edit.html',
            })
            .state('administrativeHome.vehicles', {
                templateUrl: 'app/1_administrativo/views/1_5_vehicles.edit.html',
            })
            .state('administrativeHome.quality', {
                templateUrl: 'app/1_administrativo/views/1_6_quality.edit.html',
            })
    }
]);