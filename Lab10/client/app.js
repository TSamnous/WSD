(function () {
    'use strict';

    angular.module('myApp', ["ngRoute"])

        .controller('MyController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })
        })

        .controller('createController', function ($scope) {
            $scope.createEntry = function () {
                var newData = "{\"cid\":\"" + $scope.cid + "\", \"FirstName\":\"" + $scope.FirstName + "\", \"lastName\":\"" + $scope.lastName + "\", \"email\":\"" + $scope.email + "\", \"PhoneNumber\":\"" + $scope.PhoneNumber + "\", \"O_Status\":\"" + $scope.O_Status + "\"}";
                console.log(newData)
                fetch('http://localhost:3000/new', {
                    method: "POST",
                    body: newData,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.cid=""
                $scope.FirstName=""
                $scope.lastName=""
                $scope.email=""
                $scope.PhoneNumber=""
                $scope.O_Status=""
            };
        })

        .controller('updateController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })

            $scope.getId = function () {
                var selectedId = $scope.cid
                console.log(selectedId)
                $scope.FirstName = selectedId['FirstName']
                $scope.lastName = selectedId['lastName']
                $scope.email = selectedId['email']
                $scope.PhoneNumber = selectedId['PhoneNumber']
                $scope.O_Status = selectedId['O_Status']
            }

            $scope.updateEntry = function () {
                var newData = "{\"cid\":\"" + $scope.cid['cid'] + "\", \"FirstName\":\"" + $scope.FirstName + "\", \"lastName\":\"" + $scope.lastName + "\", \"email\":\"" + $scope.email + "\", \"PhoneNumber\":\"" + $scope.PhoneNumber + "\", \"O_Status\":\"" + $scope.O_Status + "\"}";

                fetch('http://localhost:3000/update', {
                    method: "POST",
                    body: newData,
                    headers: {"Content-type": "application/json; charset=UTF-8"}
                })
                .then(response => response.json()) 
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.cid=""
                $scope.FirstName=""
                $scope.lastName=""
                $scope.email=""
                $scope.PhoneNumber=""
                $scope.O_Status=""
            };
        })

        .controller('searchController', function ($scope, $rootScope) {
            $scope.getData = function () {
                var searchJson = { O_Status: $scope.O_Status }
                var jsonObj = JSON.stringify(searchJson)
                fetch('http://localhost:3000/search', {
                    method: "POST",
                    body: jsonObj,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    $scope.datas = json
                })
                .catch(err => console.log(err))
            }
        })

        .controller('deleteController', function ($scope, $http) {
            $http.get('http://localhost:3000/').then(function (response) {
                $scope.datas = response.data
            })
            $scope.deleteEntry = function () {
                var delJson = { delID: $scope.del.cid }
                var jsonObj = JSON.stringify(delJson)

                fetch('http://localhost:3000/delete', {
                    method: "POST",
                    body: jsonObj,
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err))
                $scope.del = ""
            }
        })

        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "view.html"
                })
                .when("/create", {
                    templateUrl: "create.html",
                    controller: "createController"
                })
                .when("/update", {
                    templateUrl: "update.html",
                    controller: "updateController"
                })
                .when("/search", {
                    templateUrl: "search.html",
                    controller: "searchController"
                })
                .when("/delete", {
                    templateUrl: "delete.html",
                    controller: "deleteController"
                });
        })
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }])
})();