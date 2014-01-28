
function initialize($scope, $http){
  
  var hide = document.getElementById('search_form_box');
  
  hide.className = hide.className + " hidden";

 var mapOptions = {
    center: new google.maps.LatLng(45, -73),
    zoom: 3
  };

  var options = {
    types: ['(cities)']
  };

var map = new google.maps.Map(document.getElementById('googlemap'),
    mapOptions);

var input = document.getElementById('autocomplete');

var autocomplete = new google.maps.places.Autocomplete(input,options);
  autocomplete.bindTo('bounds', map);

  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: map
  });

  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      return;
       var hide = document.getElementById('search_form_box');
      hide.className = hide.className + " hidden";

    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }
    marker.setIcon(/** @type {google.maps.Icon} */({
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(35, 35)
    }));
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }



    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open(map, marker);

    document.getElementById("search_form_box").className = "box-cont";


    //get lat long from input searhc field

            var address = document.getElementById("autocomplete").value;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': address}, function postcodesearch(results, status) 
            {   
              if (status == google.maps.GeocoderStatus.OK) 
              {

                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                console.log(lat);
                console.log(lng);
                
                FetchCtrl($scope, $http, lat,lng);


                
              }
              else {
                alert("Error");
              }
            });
            
  });

}
   
