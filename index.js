// Initialize and add the map
function initMap() {
  // The location of Uluru

  const uluru = { lat: 45.2328172, lng: 27.8062892 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: uluru,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  });

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
