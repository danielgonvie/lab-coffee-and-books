document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);
let theMap;

function startMap(){
  theMap = new google.maps.Map(document.getElementById("map"),{
    zoom: 10,
    center: {lat: 41, lng: 2}
  })
}

startMap();