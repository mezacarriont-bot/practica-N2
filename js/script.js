async function init() {
  await customElements.whenDefined('gmp-map');

  const map = document.querySelector('gmp-map');
  const marker = document.querySelector('gmp-advanced-marker');
  const infowindow = new google.maps.InfoWindow();

  // 📍 Coordenadas para la dirección "Av. Chacra Cerro 121, Comas 15316"
  const coordenadas = { lat: -11.957580, lng: -77.060150 };
  const titulo = "Av. Chacra Cerro 121, Comas 15316";

  // Establece el centro del mapa en las coordenadas
  map.center = coordenadas;
  map.zoom = 17; // Un buen nivel de zoom para ver una calle

  // Establece la posición del marcador
  marker.position = coordenadas;
  marker.title = titulo;

  // Muestra una ventana de información al hacer clic en el marcador
  marker.addEventListener('gmp-click', () => {
    infowindow.setContent(
      `<strong>${titulo}</strong>`
    );
    infowindow.open(map.innerMap, marker);
  });
}

document.addEventListener('DOMContentLoaded', init);