'use strict';
var theoreticalModule = angular.module('sisecEnsenanzaApp.theoretical', []);
theoreticalModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('theoretical');
    //$httpProvider.interceptors.push('InyectorDeError');
});