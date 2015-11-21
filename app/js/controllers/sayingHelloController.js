'use strict';

sayingHelloApp.controller('SayingHelloController',
    function SayingHelloController($scope, greetingService) {
        $scope.name = '';
        $scope.greeting = '';
        $scope.greet = function(){
            $scope.greeting = greetingService.getGreeting($scope.name);
        };
        $scope.nameChanged = function(){
            $scope.greeting = '';
        }

        $scope.inputString = '';
        $scope.inputStringChanged = function(){
            $scope.inputStringLength = $scope.inputString + ' has ' + $scope.inputString.length + ' characters.';
        }
    });