// Ejercicio EPM
const form_epm = document.getElementById('form-epm');

form_epm.addEventListener('submit', (e) => {

  e.preventDefault();

  let id_number = document.getElementById('id-number').value;
  let social_class = document.getElementById('social-class').selectedIndex;
  let discount = document.querySelector('.discount');
  let total;

  if (social_class != 0) {
    if (social_class == 1) {
      total = 40;
    } else if (social_class == 2) {
      total = 30;
    } else {
      total = 20;
    }

    option = discount.value;
    console.log(option);
    option = parseInt(option) + total;
    console.log(option);
    discount.value = option;

    document.querySelector('button[type="submit"]').disabled = true;

  } else {
    alert('Selecciona el estrato');
    document.getElementById('social-class').focus();
  }
});

const btn_reset = document.querySelector('button[type="reset"]');

btn_reset.addEventListener('click', ()=>{
  document.querySelector('.discount').value = 0;
  document.getElementById('id-number').focus();
  document.querySelector('button[type="submit"]').disabled = false;

});