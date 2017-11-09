'use strict';
var administrativeModule = angular.module('sisecEnsenanzaApp.administrative', []);
administrativeModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('administrative');
    //$httpProvider.interceptors.push('InyectorDeError');
});