const row = document.getElementById('row-template');
const formulario = document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();

  let name = document.getElementById('name-customer').value;
  let lastName = document.getElementById('lastName-customer').value;
  let phone = document.getElementById('phone-customer').value;
  let amount = document.getElementById('amount').value;
  let platform = document.getElementById('platform').selectedIndex;
  let total;
  let totalTeam = document.querySelector('.money-team');
  console.log(totalTeam);

  if (platform != 0) {
    if (platform == 1) {
      total = amount * 144000;
    } else if (platform == 2) {
      total = amount * 215000;
    } else {
      total = amount * 444000;
    }

    valorTotal = totalTeam.value;
    console.log(valorTotal);
    valorTotal = parseInt(valorTotal) + total;
    console.log(valorTotal);
    totalTeam.value = valorTotal;

    let platforms = document.getElementById("platform");
    let selected = platforms.options[platforms.selectedIndex].text;

    answer(name,lastName,selected,amount,total);

    document.getElementById('name-customer').value="";
    document.getElementById('lastName-customer').value="";
    document.getElementById('phone-customer').value="";
    document.getElementById('amount').value="";
    document.getElementById('platform').selectedIndex=0;
    document.getElementById('name-customer').focus();

  }
  else{
    alert('Selecciona una tribuna');
    document.getElementById('platform').focus();
  }
});

function answer(name,lastName,platform,amount,total){
  let div = document.createElement('div');
  div.classList = 'col-6 col-sm-4';

  let card = document.createElement('div');
  card.className = 'card';

  let description = document.createElement('div');
  description.className = 'description';

  let h4 = document.createElement('h4');
  h4.textContent = name+"\n"+lastName;

  let selected_platform = document.createElement('p');
  selected_platform.textContent = "Tribuna: "+platform;

  let quantity = document.createElement('p');
  quantity.textContent = "Cantidad: "+amount;

  let total_customer = document.createElement('p');
  total_customer.textContent = "Total abono: $ "+total;

  row.appendChild(div);
  div.appendChild(card);
  card.appendChild(description);
  description.appendChild(h4);
  description.appendChild(selected_platform);
  description.appendChild(quantity);
  description.appendChild(total_customer);
}