// Función para inicializar el mapa
function initMap() {
    // Ubicación del marcador
    const location = { lat: -34.455769, lng: -58.5631392 };

    // Opciones del mapa
    const mapOptions = {
        zoom: 15,
        center: location
    };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Añadir un marcador
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        
        title: 'Intendente Arnoldi 2062, Virreyes, Buenos Aires, Argentina'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const iconText = document.getElementById('iconText');
  
    iconText.addEventListener('mouseover', () => {
      iconText.classList.add('hidden');
      setTimeout(() => {
        iconText.textContent = 'Buscar';
        iconText.classList.remove('hidden');
      }, 300); // Coincide con la duración de la transición en CSS
    });
  
    iconText.addEventListener('mouseout', () => {
      iconText.classList.add('hidden');
      setTimeout(() => {
        iconText.textContent = '🔍';
        iconText.classList.remove('hidden');
      }, 300); // Coincide con la duración de la transición en CSS
    });
  });
  

