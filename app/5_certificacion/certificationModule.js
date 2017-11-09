'use strict';
var certificationModule = angular.module('sisecEnsenanzaApp.certification', []);
certificationModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('certification');
    //$httpProvider.interceptors.push('InyectorDeError');
});