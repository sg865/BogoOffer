const options = document.querySelectorAll('.option');
const totalPrice = document.getElementById('total-price');

document.querySelectorAll('input[name="unit"]').forEach(radio => {
  radio.addEventListener('change', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    const selected = radio.closest('.option');
    selected.classList.add('selected');
    const price = selected.getAttribute('data-price');
    totalPrice.textContent = `Total : $${price}.00 USD`;
  });
});


document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  const selectedOption = document.querySelector('.option.selected');
  const units = selectedOption.getAttribute('data-units');
  const price = selectedOption.getAttribute('data-price');

  localStorage.setItem('cartUnits', units);
  localStorage.setItem('cartPrice', price);

  window.location.href = 'cart.html';
});

