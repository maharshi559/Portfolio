/**
 * Created by Maharshi on 6/28/2017.
 */
var showcase = angular.module("mCars", ["ngRoute"]);

showcase.config(function($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "views/home.html",

        })
        .when("/about", {
            templateUrl: "about.html",

        })
        .when("/projects", {
            templateUrl: "projects.html",

        })
        .when("/photos", {
            templateUrl: "photos.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })

        .otherwise({
            redirectTo: "/home"
        });
});
