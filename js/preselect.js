(function () {
    "use strict";
    function Preselect() {
        var vm = this;

        function activate() {
            vm.selectOptions = vm.options.concat(vm.other);
            vm.cfg = {
                select: true,
                input: false
            };
            vm.focus = false;
        }

        function switchFields() {
            vm.cfg.select = !vm.cfg.select;
            vm.cfg.input = !vm.cfg.input;
            vm.model = "";
            vm.focus = true;
        }

        vm.selected = function () {
            if (vm.model === vm.other) {
                switchFields();
            } else {
                vm.change({ value: vm.model });
            }
        };

        vm.key = function (event) {
            if (event.keyCode === 27) {
                switchFields();
            }
        };

        vm.changed = function () {
            vm.change({ value: vm.model });
        };

        activate();

    }

    angular.module("angular-form-preselect", []).
        controller("PreselectController", Preselect).
        directive("ngFormPreselect", function () {
            return {
                restrict: "E",
                scope: {
                    name: "@",
                    options: "=",
                    other: "=",
                    placeholder: "=",
                    required: "=",
                    change: "&onChange"
                },
                controller: "PreselectController",
                controllerAs: "ctrl",
                templateUrl: "/html/preselect.html",
                bindToController: true,
                link: function (scope, element, attrs) {
                    scope.$watch(function () {
                        return scope.ctrl.focus;
                    }, function (focus) {
                        if (focus) {
                            element.children()[0].focus();
                            scope.ctrl.focus = false;
                        }
                    });
                }
            };
        });

}());