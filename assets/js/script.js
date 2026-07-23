// Speedy Eats Food Landing Interactive Script

document.addEventListener('DOMContentLoaded', () => {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3000);
  }

  // App download click handlers
  document.querySelectorAll('a[href="#download"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('🚀 Speedy Eats App coming soon!');
    });
  });

  // Food card '+' button handlers
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.trim() === '+') {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast('🛒 Item added to your cart!');
      });
    }
  });

  // Dish items click handler
  document.querySelectorAll('.group').forEach(dish => {
    dish.addEventListener('click', () => {
      const img = dish.querySelector('img');
      const dishName = img ? img.alt : 'Dish';
      showToast(`😋 Exploring ${dishName}!`);
    });
  });
});