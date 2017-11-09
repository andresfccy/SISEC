'use strict';
var accountModule = angular.module('sisecEnsenanzaApp.account', []);
accountModule.config(function ($translateProvider, $translatePartialLoaderProvider, $httpProvider) {
    $translatePartialLoaderProvider.addPart('account');
    //$httpProvider.interceptors.push('InyectorDeError');
});