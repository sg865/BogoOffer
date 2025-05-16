if (document.getElementById('cart-total')) {
  const price = localStorage.getItem('cartPrice') || '0.00';
  const units = localStorage.getItem('cartUnits') || '0';

  document.getElementById('cart-items').innerHTML = `
    <p>You selected <strong>${units} unit(s)</strong></p>
  `;
  document.getElementById('cart-total').innerText = `Total: $${parseFloat(price).toFixed(2)} USD`;
}