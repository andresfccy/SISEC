'use strict';
commonsModule.factory('CommonConstants', [
    function () {
        var factory = {
            API_HOSTNAME: 'http://localhost',
            API_HOSTNAME_SSL: 'https://localhost',
            API_PORT: '1902',
            TOKEN_HEADER: 'Authorization',
            TOKEN_KEY_LOCALSTORAGE: 'authData',
            USER_ID_LOCALSTORAGE: 'u',
            ROL_LOCALSTORAGE: 'r',
            API_BASE_URL: function () {
                var baseUrl = factory.API_HOSTNAME;
                if (factory.API_PORT.length > 0 || factory.API_PORT !== '80') {
                    baseUrl += ':' + factory.API_PORT;
                }
                return baseUrl;
            },
            API_BASE_URL_SSL: function () {
                var baseUrl = factory.API_HOSTNAME_SSL;
                if (factory.API_PORT.length > 0 || factory.API_PORT !== '80') {
                    baseUrl += ':' + factory.API_PORT;
                }
                return baseUrl;
            },

            ACTIVIDADES: [],

            SISEC_ACCOUNT: '/SISECAccount'
        };

        var procesando = false;

        var funcionesObservadores = [];
        var registrarObservadorProcesando = function (funcion) {
            funcionesObservadores.push(funcion);
        };

        var notificarObservadores = function () {
            angular.forEach(funcionesObservadores, function (funcion) {
                funcion();
            });
        };

        var storage = localStorage;
        function guardar(clave, valor) {
            storage.setItem(clave, valor);
        }
        function eliminar(clave) {
            storage.removeItem(clave);
        }
        return factory;
    }
]);