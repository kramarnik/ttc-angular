'use strict';

angular.module('ttcAngularApp')
    .config(function ($provide) {
        $provide.decorator('$http', function ($delegate, $q) {
            // decorate the $delegate

            $delegate.getXML = function (options) {
                return $delegate(options).then(function (xmlResponse) {
                    var x2js = new X2JS(),
                        json = x2js.xml_str2json(xmlResponse.data);

                    return json;
                }, function (data) {
                    $q.reject(data);
                });
            };

            return $delegate;
        });
    });