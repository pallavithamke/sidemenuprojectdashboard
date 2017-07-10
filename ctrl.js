var app=angular.module("myapp",['ngMaterial','ui.router','ngMaterialSidemenu']);
app.config(['$stateProvider', '$urlRouterProvider','$mdIconProvider', function($stateProvider, $urlRouterProvider,$mdIconProvider) {

    $mdIconProvider
        .iconSet('social', 'svg/social-icons.svg', 24)
        .iconSet('call', 'svg/communication-icons.svg', 24)
        .iconSet('file', 'assets/svg/file-icons.svg', 24)
        .iconSet('hardware', 'assets/svg/hardware-icons.svg', 24)
        .iconSet('navigation', 'assets/svg/navigation-icons.svg', 24)
        .iconSet('alert', 'assets/svg/alert-icons.svg', 24)
        .iconSet('content', 'assets/svg/content-icons.svg', 24)
        .iconSet('editor', 'assets/svg/editor-icons.svg', 24)
        .defaultIconSet("svg/mdi.svg", 24);
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homectrl'
        })
        .state('account', {
            url: '/account',
            templateUrl: 'views/account.html',
            controller: 'accountctrl'
        })
        .state('classes', {
            url: '/classes',
            templateUrl: 'views/classes.html',
            controller: 'classesctrl'
        })
        .state('gallary', {
            url: '/gallary',
            templateUrl: 'views/gallary.html',
            controller: 'gallaryctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'aboutctrl'
        })
    /******************************************************/
    /*              PRIMARY MENU START                    */
    /******************************************************/
        .state('bookproduct', {
            url: '/bookproduct',
            templateUrl: 'views/bookproduct.html',
            controller: 'bookproductctrl'
        })


}]);
app.controller("homectrl",function ($scope,$mdSidenav,sidemenuService) {
    $scope.homeMenuList = sidemenuService.homeMenuList;

    window.onresize = function() {
        if(window.innerWidth > 749){
            document.getElementById("projectsidemenu").style.height =  window.innerHeight -36 + 'px';
        }
    };
    window.onresize();


    $scope.book="chemistry"

});
app.controller("bookproductctrl",function ($scope,$mdSidenav,sidemenuService) {
    $scope.book11="mathematics";
    $scope.homeMenuList = sidemenuService.homeMenuList;

});
app.controller("accountctrl",function ($scope,$mdSidenav,sidemenuService) {
    $scope.homeMenuList = sidemenuService.homeMenuList;
$scope.bookname="redbook";

});
app.controller("gallaryctrl",function ($scope,$mdSidenav) {


});
app.controller("aboutctrl",function ($scope) {
   
});
app.directive("headerDirective",function () {
        return{
            restrict:'AEC',
            templateUrl:'views/navbar.html',
            replace:'true'
        };


    }
    
);
app.service("sidemenuService",function () {
    this.homeMenuList = [
        {
            "menuName": "HOME",
            "menuIcon": "location_city",
            "menuLink": "bookproduct",
            "menuLinkf": "account",

            "defaultPage": "home.bookproduct"
        },

        {
            "menuName" : "PRODUCT",
            "menuIcon" : "person",
            "menuLink" : "account"
        },

        {
            "menuName" : "ABOUNT",
            "menuIcon" : "school",
            "menuLink" : "Data_entry"
        },

        {
            "menuName" : "CONTACT",
            "menuIcon" : "location_city",
            "menuLink" : "Report"
        },

        {
            "menuName" : "Settings",
            "menuIcon" : "group_add",
            "menuLink" : "Ssettings"
        },

        {
            "menuName" : "Help",
            "menuIcon" : "help",
            "menuLink" : "Help"
        }
    ];

});

