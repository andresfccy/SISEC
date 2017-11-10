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
            self.init = init;
            self.schedules = [
                {
                    "TipoObjeto": "tipo1",
                    "HoraInicio": "8:00",
                    "HoraFin": "15:00"
                }
            ];
            
            // Funciones
            //TODO: All the logic
            function init() {
                if (isAdmHome()) {
                    $state.go("administrativeHome.schedules");
                }

                // TODO: Init the lists
            }

            function isAdmHome() {
                return ($location.path().split('/')[1] && $location.path().split('/')[1] == 'Administrativo');
            }
        }
    ]);