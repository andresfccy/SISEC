'use strict';
var evaluationsModule = angular.module('sisecEnsenanzaApp.evaluations', []);
evaluationsModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('evaluations');
    //$httpProvider.interceptors.push('InyectorDeError');
});