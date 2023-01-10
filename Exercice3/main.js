var getLocationButton = document.getElementById('getLocationButton');

getLocationButton.addEventListener('click', function() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            document.body.innerHTML = 'Latitude: ' + latitude + '<br>Longitude: ' + longitude;
      });
    } else {
      document.body.innerHTML = 'Geolocation is not supported by this browser.';
    }
});