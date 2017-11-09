'use strict';
administrativeModule
    .controller('administrative.administrativeController',
    ['$scope', '$state', '$rootScope', '$translate', '$location', '$timeout',
        'growl', 'loading',
        'CommonConstants',
        function ($scope, $state, $rootScope, $translate, $location, $timeout,
            growl, loading,
            CommonConstants) {

            // Uso del scope únicamente para modelar opciones del menú
            $scope.title = $translate.instant("adm.title");
            $scope.currentModule = function (cur) { return cur == "adm" ? true : false;}

            // Instancia del controlador dentro de la variable self
            var self = this;
            
            // Funciones
            //TODO: All the logic
        }
    ]);