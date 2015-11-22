'use strict';

describe('SayingHelloController', function() {

    var $controllerConstructor,
        scope,
        mockGreetingService;

    beforeEach(module("sayingHelloApp"));

    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGreetingService = sinon.stub({getGreeting: function() {}});
    }));

    it ('should set the scope name to empty string', function(){

        $controllerConstructor("SayingHelloController", {'$scope':scope, greetingService: mockGreetingService});

        expect(scope.name).toBe('');
    });

    it ('should set the scope greeting to empty string', function(){

        $controllerConstructor("SayingHelloController", {'$scope':scope, greetingService: mockGreetingService});

        expect(scope.greeting).toBe('');
    });
});