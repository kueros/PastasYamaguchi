
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
  