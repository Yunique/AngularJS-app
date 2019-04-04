angular.module('calc', []).controller('calcCtrl', function ($scope) {

    $scope.elements = [];
    $scope.total = 0;


    $scope.add = function (element) {
        if (isNumeric(element.value)) {
            $scope.elements.push(element.value);
        } else {
            alert('It`s not a number')
        }
        $scope.total = $scope.sumPrice($scope.elements);
        $scope.clearInput();
    };

    $scope.clearInput = function () {
        $scope.element = null;
    };

    $scope.removeItem = function (index) {
        $scope.elements[index] = undefined;
        $scope.elements = $scope.select2element($scope.elements);
        $scope.total = $scope.sumPrice($scope.elements);
    };

    $scope.select2element = function (elements) {
        const element = [];
        $scope.elements = [];
        angular.forEach(elements, function (field) {
            if (field != undefined) element.push(field);
        });
        return element;
    };


    $scope.sumPrice = function (elements) {
        let total = 0;
        for (let i = 0; i < elements.length; i++) {
            total += ~~elements[i]
        }
        return total;
    };
});


function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}