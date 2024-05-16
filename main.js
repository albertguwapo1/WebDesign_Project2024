
window.addEventListener("scroll", function(){
header.classList.toggle("sticky", window.scrollY > 60)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

//add to cart process
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const quantity = 1; 
    addToCart(product, quantity);
  });
});

const cart = [];

function addToCart(product, quantity) {
  const productExists = cart.some(item => item.product === product);

  if (productExists) {
    const itemToUpdate = cart.find(item => item.product === product);
    itemToUpdate.quantity += quantity;
  } else {
    const newItem = { product, quantity };
    cart.push(newItem);
  }

  updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
  
    let cartItemsHTML = '';
    let cartTotal = 0;
  
    cart.forEach(item => {
      const itemTotal = item.quantity * getProductPrice(item.product);
      cartTotal += itemTotal;
  
      cartItemsHTML += `<li>${item.quantity} x ${item.product} - ₱ ${itemTotal.toFixed(2)}</li>`;
    });
  
    cartItemsElement.innerHTML = cartItemsHTML;
    cartTotalElement.textContent = `Total: ₱ ${cartTotal.toFixed(2)}`;
  }

  function getProductPrice(product) {
    switch (product) {
      case 'Aqua De Gio':
        return 1299;
      case 'The Most Wanted':
        return 5990;
      case 'Lacoste Blanc':
        return 4295;
      case 'In Black':
        return 7300;
      case 'Light Blue':
        return 4695;
      case 'Dior Sauvage':
        return 9810;
      case 'Versace Eau Fraiche':
        return 4788;
      case 'JPG Le Male':
        return 7200;
      case 'Polo Black':
        return 6890;
      case 'Spicebomb':
        return 7200;
      case 'Black Opium':
        return 4809;
      case 'MYSLF':
        return 8559;
      case '1 Million':
        return 4799;
      default:
        return 0;
    }
  }

  //checkout form
  const checkoutButton = document.getElementById('checkout-btn');

checkoutButton.addEventListener('click', () => {
  cart.length = 0;
  updateCart();
});

const checkoutForm = document.getElementById('checkout-form');
checkoutForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Process payment
});

const formData = new FormData(checkoutForm);
const name = formData.get('name');
const email = formData.get('email');
const address = formData.get('address');
const paymentMethod = formData.get('payment-method');

const xhr = new XMLHttpRequest();
xhr.open('POST', '/process-payment.php');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = () => {
  if (xhr.status === 200) {
    // Payment processed successfully
    alert('Payment processed successfully!');
  } else {
    // Payment processing failed
    alert('Payment processing failed. Please try again later.');
  }
};
xhr.send(`name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&address=${encodeURIComponent(address)}&paymentMethod=${encodeURIComponent(paymentMethod)}`);


const form = document.getElementById('checkout-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your purchase! Your order is being processed and will be shipped to the address you provided.');
  });