sayingHelloApp.factory('greetingService', function () {
    return {
        getGreeting: function (name) {
            return 'Hello, ' + name + ', nice to meet you!';
        }
    }
});