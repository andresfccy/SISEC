'use strict';
var operatorModule = angular.module('sisecEnsenanzaApp.operator', []);
operatorModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('operator');
    //$httpProvider.interceptors.push('InyectorDeError');
});