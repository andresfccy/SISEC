'use strict';
accountModule
    .controller('account.accountController',
    ['$scope', '$state', '$rootScope', '$translate', '$location', '$timeout',
        'growl', 'loading',
        'CommonConstants',
        function ($scope, $state, $rootScope, $translate, $location, $timeout,
            growl, loading,
            CommonConstants) {

            // Instancia del controlador dentro de la variable self
            var self = this;
            
            // Publicación de las funciones por medio de la variable self
            self.isHome = isHome;
            self.getCtrlName = getCtrlName;
            self.submit = submit;

            // Funciones
            function isHome() {
                if (!$location.path().split('/')[1] && $location.path().split('/')[1] == '') {
                    return true;
                }
                return false;
            }

            function getCtrlName() {
                return "account.accountController";
            }

            function submit() {
                $state.go("administrativeHome");
            }

            //Simular defer para mostrar el símbolo de carga
            //loading.stopLoading(getCtrlName());
            //$timeout(function () { loading.stopLoading(getCtrlName()); }, 2000);
        }
    ]);