'use strict';

angular.module('documentsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   

    
  });

// Datepicker //

var DatepickerDemoCtrl = function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.showWeeks = true;
  $scope.toggleWeeks = function () {
    $scope.showWeeks = ! $scope.showWeeks;
  };

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  
};

// tabs

var TabsDemoCtrl = function ($scope) {
  $scope.tabs = [
    { title:"Dynamic Title 1", content:"Dynamic content 1" },
    { title:"Dynamic Title 2", content:"Dynamic content 2"}
  ];

};

//rating

var RatingDemoCtrl = function ($scope) {
  $scope.rate = 0;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver1 = function(value) {
    $scope.overStar1 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver2 = function(value) {
    $scope.overStar2 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver3 = function(value) {
    $scope.overStar3 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver4 = function(value) {
    $scope.overStar4 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver5 = function(value) {
    $scope.overStar5 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
  $scope.hoveringOver6 = function(value) {
    $scope.overStar6 = value;
    
    $scope.percent = 100 * (value / $scope.max);
  };
};

//tags ctrl


        


  // $scope.addTag1 = function(){
  //   // var prb = document.getElementsByClassName('feature_tags')[0].innerHTML;
  //   // $scope.tag = prb;
  //   var proba = $(".tagmenu1").html();
  //   $scope.tag = proba;
  //   $scope.tags.push($scope.tag);
   
  // }
  // $scope.removeTodo = function(index){
  //      $scope.tags.splice(index, 1);
  //   }
  // $scope.addTag2 = function(){
  //   // var prb = document.getElementsByClassName('feature_tags')[0].innerHTML;
  //   // $scope.tag = prb;
  //   var proba = $(".tagmenu2").text();
  //   $scope.tag1 = proba;
  //   $scope.tags.push($scope.tag1);
  // }

 
  
//}

// Map initialization //

function GoogleMapsController ($scope, $timeout) {

    // Enable the new Google Maps visuals until it gets enabled by default.
    // See http://googlegeodevelopers.blogspot.ca/2013/05/a-fresh-new-look-for-maps-api-for-all.html
    google.maps.visualRefresh = true;

    angular.extend($scope, {
        map: {
            showTraffic: true,
            showBicycling: false,
            showWeather: false,
            center: {
                latitude: 45,
                longitude: -73
            },
            options: {
              streetViewControl: false,
              panControl: false
            
            },
              zoom: 3,
            minZoom: 3,
            maxZoom: 16,
            zoomControl: true,
            dragging: false,
            bounds: {}, 
            
        },
        
    }); 

    //show hide create new tripzzy window

    $scope.show = function(){
      console.log("haj");
      $scope.open = open;

      var tripzzyname = document.getElementById('autocomplete').value;
      $scope.name = tripzzyname;

     

    }
    $scope.close = function(){
      console.log("haj again");
      $scope.open = !open;
      
    }
    
   
}


