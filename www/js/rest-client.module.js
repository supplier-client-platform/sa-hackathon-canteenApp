/**
 * rest-client Module
 *
 * Description
 */
angular.module('rest-client', []).
    config(['$httpProvider', function ($httpProvider) {
        //set api authentication in the request header
        $httpProvider.defaults.headers.post = {
            'X-USERNAME': 'apiuser'
            , 'X-PASSWORD': 'api!#1*'
            , 'Content-Type': 'application/x-www-form-urlencoded'
        };
        $httpProvider.defaults.headers.put = $httpProvider.defaults.headers.post;
        // $httpProvider.defaults.useXDomain = true;
        //       delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }]).
    factory('$restClient', ['$rootScope', '$http', function ($rootScope, $http) {
        return {
            getUserDetails: function (callBack) {
                $http({
                    method: 'GET'
                    , url: 'https://jsonplaceholder.typicode.com/users'
                    , data: ''
                }).success(function (msg) {
                    callBack(msg);
                }).error(function (err) {
                    console.log(err);
                    callBack('error');
                });
            },
            getPost: function (postNo, callBack) {
                $http({
                    method: 'GET'
                    , url: 'https://jsonplaceholder.typicode.com/posts'
                    , params: { userId: 1 }
                }).success(function (msg) {
                    callBack(msg);
                }).error(function (err) {
                    console.log(err);
                    callBack('error');
                });
            },
            getProducts: function (callBack) {
                $http({
                    method: 'GET'
                    , url: 'http://api.sa-hack.reactive-solutions.xyz/api/v1/product/all'
                }).success(function (msg) {
                    callBack(msg);
                }).error(function (err) {
                    console.log(err);
                    callBack('error');
                });
            }

            //        , callLogin: function (userName, password, callBack) {
            //            $http({
            //                method: 'POST'
            //                , url: $rootScope.WS_URL + '/user/login'
            //                , data: 'username=' + userName + '&password=' + password
            //            }).success(function (msg) {
            //                callBack(msg);
            //            }).error(function (err) {
            //                console.log(err);
            //                callBack('error');
            //            });
            //        }
            //        , createAccount: function (email, password, callBack) {
            //            $http({
            //                method: 'POST'
            //                , url: $rootScope.WS_URL + '/user'
            //                , headers: {
            //                    "Content-Type": 'application/json'
            //                }
            //                , data: {
            //                    'cmd': 'create'
            //                    , 'uname': email
            //                    , 'password': password
            //                }
            //            }).success(function (msg) {
            //                callBack(msg);
            //            }).error(function (err) {
            //                callBack('error');
            //            });
            //        }
        };
    }]);