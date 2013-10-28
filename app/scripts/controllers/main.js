'use strict';

angular.module('ttcAngularApp')
    .controller('MainCtrl',['$scope', 'TtcService', function ($scope, TtcService) {
   
    $scope.loading = true;

    TtcService.getRouteList().then(function (data) {
        $scope.routeList = data;
    }, function () {

    }).finally(function () {
        $scope.loading = false;
    });

    $scope.route = null;

    $scope.getRoute = function (route) {
        $scope.loading = true;

        TtcService.getRoute(route._tag).then(function (data){
            $scope.route = data;
        }, function(){
              
        }).finally(function(){
            $scope.loading = false;
        });
    };

    $scope.getPredictions = function (route, stop) {
        $scope.loading = true;

        TtcService.getPredictions(route._tag, stop._tag).then(function (data) {
            $scope.predictions = data;
        }, function () {

        }).finally(function () {
            $scope.loading = false;
        });
    };
}]);
