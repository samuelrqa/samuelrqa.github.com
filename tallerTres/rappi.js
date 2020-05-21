const row = document.getElementById('row-rappi');
const form_rappi = document.getElementById('form-rappi');

form_rappi.addEventListener('submit', (e) => {

  e.preventDefault();

  let name_bakery = "Tortas de la abuela";
  let description = "Tienda de panadería y repostería tradicional";
  let phone = "5256987"
  let product = document.getElementById('product').value;
  let number = document.getElementById('number').value;
  let price = 30000;
  let shipping = 7800;
  let discount = 10000;
  let total = 0;

  if (number > 0) {
    total = number * price + shipping - discount;
    console.log(total);

    order_details(name_bakery, description, phone, product, number, price, shipping, discount, total);

    let btn_clear = document.getElementById('clear');

    btn_clear.addEventListener('click', clear_element);

    document.querySelector('button[type="reset"]').disabled = false;
    document.querySelector('button[type="submit"]').disabled = true;

  } else {
    alert('Debes ingresar una cantidad');
    document.getElementById('number').focus();
  }

});


function order_details(name_bakery, description, phone, product, number, price, shipping, discount, total) {
  let div = document.createElement('div');
  div.classList = 'col-9 col-sm-6 order-deatails';

  let order = document.createElement('div');
  order.className = 'order';

  let details = document.createElement('div');
  details.className = 'details';

  let h5 = document.createElement('h5');
  h5.textContent = name_bakery;

  let h6 = document.createElement('h6');
  h6.textContent = description;

  let number_phone = document.createElement('p');
  number_phone.textContent = "Teléfono: " + phone;

  let name_product = document.createElement('p');
  name_product.textContent = "Producto: " + product;

  let quantity = document.createElement('p');
  quantity.textContent = "Cantidad: " + number;

  let price_product = document.createElement('p');
  price_product.textContent = "Precio unitario $: " + price;

  let price_shipping = document.createElement('p');
  price_shipping.textContent = "Costo de envío: $ " + shipping;

  let discount_p = document.createElement('p');
  discount_p.textContent = "Descuento: $ " + discount;

  let total_product = document.createElement('p');
  total_product.textContent = "Total compra: $ " + total;

  row.appendChild(div);
  div.appendChild(order);
  order.appendChild(details);
  details.appendChild(h5);
  details.appendChild(h6);
  details.appendChild(number_phone);
  details.appendChild(name_product);
  details.appendChild(quantity);
  details.appendChild(price_shipping);
  details.appendChild(discount_p);
  details.appendChild(total_product);
}

function clear_element() {
  let deleted = document.querySelector('.order-deatails');
  row.removeChild(deleted);
  document.getElementById('number').value = "";
  document.getElementById('clear').disabled = true;
  document.querySelector('button[type="submit"]').disabled = false;
}