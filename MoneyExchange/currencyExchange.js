const currencyExchange = () => {
  var amount = document.getElementById('amount').value;
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;

  const VIETNAM_DOLLAR = 23204.50;
  const YEN_DOLLAR = 110.82;
  const POUND_DOLLAR = 0.77;

  var dollar;
  switch (from) {
    case "VND": dollar = amount / VIETNAM_DOLLAR; break;
    case "DOLLAR": dollar = amount; break;
    case "YEN" : dollar = amount / YEN_DOLLAR; break;
    case "POUND": dollar = amount / POUND_DOLLAR; break;
  }

  var result;

  switch (to) {
    case "VND": result = dollar * VIETNAM_DOLLAR; break;
    case "DOLLAR": result = dollar; break;
    case "YEN" : result = dollar * YEN_DOLLAR; break;
    case "POUND": result = dollar * POUND_DOLLAR; break;
  }

  var newDiv = document.getElementById('result');
  newDiv.innerHTML = `Result: ${result} ${to}`;
}
