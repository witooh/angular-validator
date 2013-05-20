'use strict';
App.Services.
    factory('validator', ['$rootScope', function ($rootScope) {
        var validateService = {};

        validateService.make = function (selector, config) {
            var defaultConfig = {
                onkeyup: false,
                errorElement: 'span',
                errorClass: 'help-inline',
                highlight: function (element) {
                    $(element).closest('.control-group').addClass('error');
                },
                unhighlight: function (element) {
                    $(element).closest('.control-group').removeClass('error');
                },
                submitHandler: function (form) { }
            };
            config = $.extend(defaultConfig, config);
            $(selector).validate(config);
        };
        return validateService;
    }]);