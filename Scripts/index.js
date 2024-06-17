document.addEventListener('DOMContentLoaded', (event) => {
  const logoLink = document.querySelector('.logo-link');
  const logoImage = logoLink.querySelector('img');

  logoLink.addEventListener('mousemove', (e) => {
    const rect = logoImage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      logoLink.style.cursor = 'pointer';
    } else {
      logoLink.style.cursor = 'default';
    }
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const apiKey = 'AIzaSyDVqpFYglCte6I4IPk0T8cbvT8Lp7raU60'; // Reemplaza con tu clave API
  const businessLocation = '-34.4406393,-58.5658106'; // Coordenadas del negocio
  const mapIframe = document.getElementById('google-map');
  
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${businessLocation}`;
  mapIframe.src = mapUrl;

  document.getElementById('como-llegar').addEventListener('click', function () {
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${businessLocation}`;
      window.open(mapsUrl, '_blank');
  });
});
