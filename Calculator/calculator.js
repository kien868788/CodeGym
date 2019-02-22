const getElement = function(element) {
  if (element[0] === '#')
        return document.querySelector(element);
  return document.querySelectorAll(element);
}

const calculator = {
  firstOperand: '',
  operator: '',
  secondOperand: '',
  currentOperand: 0, // 0 là 1 , 1 là 2
  display: '0'
}

const display = function() {
  const viewer = getElement('#viewer');
  viewer.innerHTML = calculator.display;
}

const operators = getElement('.operator');
operators.forEach(e => e.addEventListener('click',(event) => {
    console.log("click an operator");
    const {value} = event.target;
    console.log('current operator: ' + calculator.currentOperand);
    calculator.operator = value;
    if (!calculator.currentOperand) {
      if (calculator.firstOperand) {clearAll.click(); return;}
      calculator.currentOperand++;
    } else {
      if (!calculator.secondOperand) return;
      else {
        equal.click();
        calculator.operator = value;
      }
    }
}))

const equal = getElement('#equal');
equal.addEventListener('click', (event) => {
  switch (calculator.operator) {
    case '*': calculator.display = Number(calculator.firstOperand) * Number(calculator.secondOperand); break;
    case '/': calculator.display = Number(calculator.firstOperand) / Number(calculator.secondOperand); break;
    case '+': calculator.display = Number(calculator.firstOperand) + Number(calculator.secondOperand); break;
    case '-': calculator.display = Number(calculator.firstOperand) - Number(calculator.secondOperand); break;
  }
  calculator.currentOperand = 0;
  calculator.firstOperand = calculator.display;
  calculator.secondOperand = '';
  display();
})

const numbers = getElement('.number');
numbers.forEach(e => e.addEventListener('click',(event) => {
  const {value} = event.target;
  if(!calculator.currentOperand) {
    calculator.firstOperand += value;
    calculator.display = calculator.firstOperand;
  } else {
    calculator.secondOperand += value;
    calculator.display = calculator.secondOperand;
  }
  display();
}))

const decimal = getElement('.decimal');
decimal.forEach(e => e.addEventListener('click',(event) => {
  const {value} = event.target;
  if(!calculator.currentOperand) {
    calculator.firstOperand += value;
    calculator.display = calculator.firstOperand;
  } else {
    calculator.secondOperand += value;
    calculator.display = calculator.secondOperand;
  }
  display();
}))

const clearAll = getElement('#all-clear');
clearAll.addEventListener('click',(event) => {
  calculator.firstOperand = '';
  calculator.operator = '';
  calculator.secondOperand = '';
  calculator.currentOperand = 0;
  calculator.display = '0';
  display();
})
