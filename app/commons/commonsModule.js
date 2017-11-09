'use strict';
var commonsModule = angular.module('sisecEnsenanzaApp.commons', []);
commonsModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('commons');
    //$httpProvider.interceptors.push('InyectorDeError');
});