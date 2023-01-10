(function () {
    'use strict';

    angular.module('lab7App', [])

        .controller('MyController', function ($scope, $http) {
            
            $http.get('data.json').then(function (response) {
                $scope.datas = response.data;
            });

            $scope.rowLimit = 6;
            $scope.limit = 6;
    
            $scope.order = "";
            $scope.genderCase = "uppercase";
            $scope.search = "";
    

            $scope.setName = function () {
                if($scope.order === "name") {
                    $scope.order = "-name";
                    return;
                }
                $scope.order = "name";
            }

            $scope.setAge = function () {
                if($scope.order === "age") {
                    $scope.order = "-age";
                    return;
                }
                $scope.order = "age";
            }

            $scope.setGender = function () {
                if($scope.order === "gender") {
                    $scope.order = "-gender";
                    return;
                }
                $scope.order = "gender";
            }

            $scope.setDob = function () {
                if($scope.order === "date") {
                    $scope.order = "-date";
                    return;
                }
                $scope.order = "date";
            }

            $scope.setBookDate = function () {
                if($scope.order === "book_Date") {
                    $scope.order = "-book_Date";
                    return;
                }
                $scope.order = "book_Date";
            }

            $scope.setCur = function () {
                if($scope.order === "orVal") {
                    $scope.order = "-orVal";
                    return;
                }
                $scope.order = "orVal";
            }

            $scope.setSt = function () {
                if($scope.order === "orSt") {
                    $scope.order = "-orSt";
                    return;
                }
                $scope.order = "orSt";
            }
        })
        .filter('inrValue', InrFilter)
        .filter('findAge', AgeFinder);

        function InrFilter (){
            return function (input) {
                input = input * 86.88;
                input = "₹" + String(input.toFixed(2));
                return input;
            };
        }

        function AgeFinder () {
            return function (input) {
                var birth = input.split("-");
                var year = birth[0];
                var month = birth[1];
                var date = birth[2];

                var dob = new Date(year, month, date);

                var diff_ms = Date.now() - dob.getTime();
                var age_dt = new Date(diff_ms); 
            
                return Math.abs(age_dt.getUTCFullYear() - 1970);
            }
        }

})();