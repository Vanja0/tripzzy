'use strict';

var app = angular.module('documentsApp', ['ngRoute', 'google-maps', 'ngAnimate', 'fundoo.directives', 'ui.bootstrap', 'ngTagsInput'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/the_team', {
        templateUrl: 'views/the_team.html', 
        controller: 'TheTeam'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html', 
        controller: 'TheTeam'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html', 
        controller: 'TheTeam'
      })
      .when('/terms_of_use', {
        templateUrl: 'views/terms_of_use.html', 
        controller: 'TheTeam'
      })
      .when('/privacy_policy', {
        templateUrl: 'views/privacy_policy.html', 
        controller: 'TheTeam'
      })
      .when('/sitemap', {
        templateUrl: 'views/sitemap.html', 
        controller: 'TheTeam'
      })
      .otherwise({
        redirectTo: '/'
      });
    
      
  });

//hover effect on top bar

app.controller('MainCtrl', function($scope, $timeout){
     $scope.show = false;


  });

app.controller('TagsCtrl', function($scope, $q, $timeout) {
            var superheroes = ['Family Vacation', 'Individual Trip', 'Group Trip', 'With Partner', 'With a Friend', 'Sports', 'Swiming', 'Hiking', 'Fishing', 'Sailing', 'Biking', 'Winter Sports', 'Event', 'Honeymoon', 'Fine Dining', 'Romantic Trip', 'Secret Hideaway', 'Wellness', 'Entertainment', 'Relaxation', 'Roadtrip', 'Animal Watching', 'Adventure', 'Driving', 'Hiking', 'Biking', 'Sailing', 'Survival', 'Stag Night', 'Pub Crawl', 'Hens Night', 'Clubbing', 'Meeting People', 'Girlfrined getaway', 'Concert', 'Spring Break', 'Festival', 'Conference', 'Convention', 'Fair', 'Shopping', 'Sightseeing', 'Religious Experience', 'Art', 'Musical', 'Opera', 'Film Festival', 'Fair', 'Downtown', 'Outskirts', 'City', 'Metropolis', 'Cruise', 'Desert', 'Mountain', 'Camping', 'Farm', 'Beach', 'River', 'Lake', 'Forest', 'Spa', 'City Hotel', 'Design Hotel', 'Apartment Hotel', 'Boutique Hotel', 'Historic', 'Beach Hotel', 'Suite Hotel', 'Eco Hotel', 'Hostel', 'Bed and Breakfast', 'Private Rental', 'Pension', 'Motel', 'Farm Stay', 'Extended Stay Hotel', 'Boarding Houses', 'Mini Hotels', 'Resort Hotel', 'Luxury Hotel', 'Wellness Hotel', 'Small Leading Hotels', 'Design Hotel', 'Casino Hotel', 'Chalet', 'Cruise', 'Boutique Hotel', 'Beach Hotel', 'Business Hotel', 'Airport Hotel', 'Conference Center', 'Convention Center', 'Suite Hotel'];

            $scope.tags = [];
            $scope.placeholder = {value: "New tag" };
            $scope.loadItems = function(query) {
              console.log(query);
              var deferred = $q.defer();
              var items = [];
              for (var i = 0; i < superheroes.length; i++) {
                if (superheroes[i].indexOf(query) > -1) {
                  items.push(superheroes[i]);
                }
              }
              $timeout(function() {
                deferred.resolve(items);
              }, 100);
              return deferred.promise;
            };

            

              
              $scope.newObject = {};
              $scope.items = [{name:'Family Vacation'}, {name:'Individual Trip'}, {name:'Group Trip'}, {name:'With Partner'}, {name:'With a Friend'}];

              $scope.add = function(name){

                $scope.tags.push(name);
                
              }
              $scope.whyitems=[{tag:'Sports and Activity'}, {tag:'Romantic'}, {tag:'Adventure'}, {tag:'Party'}, {tag:'With a Friend'}, {tag:'Business'}, {tag:'Shopping'}, {tag:'Wellness'}, {tag:'Sightseeing'}, {tag:'Religious Experience'}, {tag:'Culture'}, {tag:'Fair'}];
              $scope.addwhy = function(tag){

                $scope.tags.push(tag);
                
              }
              $scope.whereitems=[{tag:'City'}, {tag:'Nature'}, {tag:'Spa'}];
              $scope.addwhere = function(tag){

                $scope.tags.push(tag);
                
              }
              $scope.typeitems=[{tag:'Hotel'}, {tag:'Budget Place'}, {tag:'Luxurious'}, {tag:'Business'}];
              $scope.addtype = function(tag){

                $scope.tags.push(tag);
                
              }
            

        })
        .config(function(tagsInputConfigProvider) {
            tagsInputConfigProvider
              .setDefaults('tagsInput', {
                placeholder: 'Enter the name of the place you stayed',
                removeTagSymbol: 'x'
              })
              .setDefaults('autoComplete', {
                highlightMatchedText: true
              });
        });

  
app.controller('Carousel', ['$scope', 'FlickrApi', function($scope, flickr) {
    var carousel;

    $scope.hasPrevious = function() {
      return carousel ? carousel.hasPrevious() : false;
    };
    $scope.previous = function() {
      if (carousel) { carousel.prev(); }
    };
    $scope.hasNext = function() {
      return carousel ? carousel.hasNext() : false;
    };
    $scope.next = function() {
      if (carousel) { carousel.next(); }
    };

    var loadPhotos = function(carouselScope, page) {
      carousel.updatePageCount(6);
      carouselScope.photos = flickr.getPhotos(page);
      carouselScope.getPhotoUrl = function(photo) {
        return flickr.getPhotoUrl(photo);
      };
    };
    $scope.loadPage = function(page, tmplCb) {
      var newScope = $scope.$new();
      loadPhotos(newScope, page);
      tmplCb(newScope);
    };
    $scope.onCarouselAvailable = function(car) {
      carousel = car;
    };
  }]).factory('FlickrApi', function() {
    var pages = [
      [
        { "id": "8429919851", "secret": "b37f71ab7a", "server": "8079", "farm": 9, "title": "Back from Work [Explored]", "isprimary": 0 },
        { "id": "8609770312", "secret": "ce2cc025ee", "server": "8392", "farm": 9, "title": "Chhau Masks of Charida [Explored]", "isprimary": 0 },
        { "id": "8605097271", "secret": "84b6ec7e0e", "server": "8120", "farm": 9, "title": "স্তব্ধতার গান......The Sound of Silence [Explored]", "isprimary": 0 },
        { "id": "8602385755", "secret": "b26323b04c", "server": "8532", "farm": 9, "title": "Sandakphu @ Sunset [Explored]", "isprimary": 0 },
        { "id": "8600778114", "secret": "6636515c02", "server": "8227", "farm": 9, "title": "Spring Colours [Explored]", "isprimary": 0 }
      ], [
        { "id": "8593917187", "secret": "a274587f5c", "server": "8241", "farm": 9, "title": "Celebration [Explored]", "isprimary": 0 },
        { "id": "8592654144", "secret": "3654566f78", "server": "8105", "farm": 9, "title": "Spring Garden [Explored]", "isprimary": 1 },
        { "id": "8590057990", "secret": "9948a167ea", "server": "8095", "farm": 9, "title": "Spring Solar System [Explored]", "isprimary": 0 },
        { "id": "8585649920", "secret": "43dc41c8bb", "server": "8518", "farm": 9, "title": "Cherry Blossom [Explored]", "isprimary": 0 },
        { "id": "8583184576", "secret": "52eb4819d8", "server": "8372", "farm": 9, "title": "Flambeau [Explored]", "isprimary": 0 }
      ], [
        { "id": "8580890561", "secret": "45c23c4225", "server": "8231", "farm": 9, "title": "Spring Garden [Explored]", "isprimary": 0 },
        { "id": "8428963019", "secret": "9525636b0f", "server": "8186", "farm": 9, "title": "Sandakphu [Explored]", "isprimary": 0 },
        { "id": "8426344513", "secret": "e2e6bb897f", "server": "8514", "farm": 9, "title": "Life process continues to flow... [Explored]", "isprimary": 0 },
        { "id": "8423110349", "secret": "ce1da3ab8f", "server": "8472", "farm": 9, "title": "Varanasi [Explored]", "isprimary": 0 },
        { "id": "8418889023", "secret": "a4e0cf98e2", "server": "8326", "farm": 9, "title": "To Get A Perfect Sunset.... [Explored]", "isprimary": 0 }
      ], [
        { "id": "8417868981", "secret": "7a4811fb3d", "server": "8212", "farm": 9, "title": "Murguma Lake at Sunset [Explored]", "isprimary": 0 },
        { "id": "8413140020", "secret": "c82a9a2bc5", "server": "8356", "farm": 9, "title": "The Peasant and The Photographer [Explored]", "isprimary": 0 },
        { "id": "8404264476", "secret": "9395407e0a", "server": "8466", "farm": 9, "title": "Every Day A New Beginning ! [Explored]", "isprimary": 0 },
        { "id": "8401996292", "secret": "dfc05d1414", "server": "8515", "farm": 9, "title": "Red In White [Explored]", "isprimary": 0 },
        { "id": "8398341696", "secret": "1e90a37771", "server": "8473", "farm": 9, "title": "Bengal in Winter [Explored]", "isprimary": 0 }
      ], [
        { "id": "8395243202", "secret": "faae05edf7", "server": "8227", "farm": 9, "title": "SEA.....SAND......SUNSET.....SHADOW [Explored]", "isprimary": 0 },
        { "id": "8233392271", "secret": "bcd284de10", "server": "8342", "farm": 9, "title": "Back from work.....[Explored]", "isprimary": 0 },
        { "id": "8230954133", "secret": "b34c08caab", "server": "8060", "farm": 9, "title": "নীলকন্ঠ  পাখির খোঁজে [Explored]", "isprimary": 0 },
        { "id": "8210730110", "secret": "1145031dec", "server": "8057", "farm": 9, "title": "Catch The Dream [Explored]", "isprimary": 0 },
        { "id": "8205723341", "secret": "70fd23564a", "server": "8207", "farm": 9, "title": "The Gate [Explored]", "isprimary": 0 }
      ], [
        { "id": "8204067606", "secret": "afcaae887d", "server": "8347", "farm": 9, "title": "Life in the Mist [Explored]", "isprimary": 0 },
        { "id": "8201251807", "secret": "599bcd9439", "server": "8485", "farm": 9, "title": "Chhath......Festival Portrait [Explored]", "isprimary": 0 },
        { "id": "8193202609", "secret": "e187f099c4", "server": "8203", "farm": 9, "title": "The Temple Bells [Explored]", "isprimary": 0 },
        { "id": "8031568446", "secret": "0d1c1b0b83", "server": "8310", "farm": 9, "title": "তামট । Plain Tiger [Explored]", "isprimary": 0 },
        { "id": "8035496828", "secret": "0b950f69f6", "server": "8036", "farm": 9, "title": "Explore Front Page", "isprimary": 0 }
      ]
    ];
    return {
      getPhotos: function(page) {
        // Ideally, go off and fetch the next page of data fromt he server, but we'll do it locally in the sample
        return pages[page];
      },
      getPhotoUrl: function(photo) {
        return 'http://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_n.jpg';
      }
    };
  }); 



app.controller('TheTeam', function($scope, $timeout){
        $timeout(function(){
          $scope.transitionState = "active";
        },10);
});

app.controller('TripzzyCtrl', function($scope, $window){

  
       

});

//Page transition animation

function HomeController($scope, $timeout,$http) {
    
    $scope.$on("$routeChangeSuccess", function (scope, next, current) {

        
        $timeout(function(){
            $scope.transitionState = "active";
            initialize($scope, $http);
            
          },10);
                  
    });

    $scope.templatePath =  'views/new-tripzzy.html';

    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo='';
    }
    $scope.removeTodo = function(index){
      $scope.todos.splice(index, 1);
    }


}

function FetchCtrl( $scope, $http, lat, lng) {

    console.log("usao sam");
    
    var xmlHttp;
    var method = 'JSONP';
    var url = 'http://api.flickr.com/services/rest/?method=flickr.photos.search&lat=' + lat + '&lon=' + lng + '&per_page=6&api_key=b88ce9da3e33791c869ad6441d51f3a0&format=json&jsoncallback=jsonFlickrApi';
    console.log(url);

    $http.jsonp(url);

    

   
}
 
function jsonFlickrApi(datas) {
   var galleryData = [];
   
    angular.forEach(datas.photos.photo, function (data, key, $scope) {  
          //console.log($scope);
            //console.log(data.id);      
          
            var input = 'http://farm' + data.farm + '.staticflickr.com/' + data.server + '/' + data.id + '_' + data.secret + '_n.jpg';
            //console.log(input);
            if (key == 0) {
              document.getElementById("flickr").src=input;
              //GalleryCtrl($scope, input, data);
            }
            this.push(input);

            // var IMAGE_WIDTH = 405;
            // //scope_1.IMAGE_LOCATION = input;
            // $scope.galleryData.push(input);
            // console.log( galleryData );
            
            }, galleryData);
    console.log(galleryData);
      
      var scope = angular.element($("#gallery")).scope();
      scope.$apply(function(){
        scope.galleryData = galleryData;
      })
      
      


    //return galleryData;
    // console.log( $scope.galleryData );
}

GalleryCtrl.$inject = ['$scope'];

function GalleryCtrl($scope,galleryData, $timeout){
    console.log($scope);
    console.log(galleryData);
    
    // console.log($scope);

    //   console.log(galleryData);
    
      var IMAGE_WIDTH = 400;
      //var galleryData = ["http://farm4.staticflickr.com/3587/3473578940_52aed44ce9_n.jpg", "http://farm4.staticflickr.com/3385/3472763839_d933ecce4a_n.jpg", "http://farm4.staticflickr.com/3513/3466485651_ecb1ee4a3d_n.jpg", "http://farm4.staticflickr.com/3542/3473602424_05eeb8a9ec_n.jpg"];
      
      
      
      // angular.forEach(galleryData, function(image, key){
      //     $scope.galleryData = galleryData;
      //     console.log(image);
                    //document.getElementById("fullscroller").innerHTML += "<li><img ng-src=" + image + " src=" + image + "></li>";
      // });    
       

          
     

      $scope.scrollTo = function(image,ind) {
        $scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
        $scope.selected = image;
      };
    
}
    


function getTripzzies($scope, $http){
   //var method = 'POST';
   var url = 'http://dev.trippzy.htec.co.rs/app_dev.php/tripzzy/getbyuser&jsoncallback=jsonCallback';
   var config = {method:'POST', params: {userId: "25", page: "1", perPage: "100"}};
    $http.jsonp(url,config);
}
function jsonCallback(response){
  console.log(response);
}




