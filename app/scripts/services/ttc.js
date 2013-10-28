'use strict';

angular.module('ttcAngularApp')
  .service('TtcService', function Ttc($http, $q) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var apiRoute = 'http://webservices.nextbus.com/service/publicXMLFeed',
          agency = 'ttc';

      function getRouteList() {
          var params = {
              a: agency,
              command: 'routeList'
          };

          return $http.getXML({
              url: apiRoute,
              params: params,
              method: 'GET'
          }).then(function (data) {
              return data.body.route;
          }, function (data) {
              $q.reject(data);
          });
      }

      function getRoute(route) {
          var params = {
              a: agency,
              command: 'routeConfig',
              r: route
          };

          return $http.getXML({
              url: apiRoute,
              params: params,
              method: 'GET'
          }).then(function (data) {
              return data.body.route;
          }, function (data) {
              $q.reject(data);
          });
      }

      function getPredictions(route, stop) {
          var params = {
              command: 'predictions',
              a: agency,
              r: route,
              s: stop,
              useShortTitles: true
          };

          return $http.getXML({
              url: apiRoute,
              params: params,
              method: 'GET'
          }).then(function (data) {
              return data.body.predictions;
          }, function (data) {
              $q.reject(data);
          });
      }

      return {
          getRouteList: getRouteList,
          getRoute: getRoute,
          getPredictions: getPredictions
      };
});
