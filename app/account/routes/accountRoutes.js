'use strict';
accountModule.config(['$stateProvider',
    function ($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/account/views/login.html',
                controller: 'account.accountController as accCtrl'
            })
    }
]);