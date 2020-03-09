import operate from './operate';

function calculate(btn, calculator) {
  switch (btn) {
    case 'AC':
      calculator = {
        total: null,
        next: null,
        operation: null,
      };
      break;
    case '+/-':
      calculator.next *= -1;
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
    case '%':
      calculator.operation = btn;
      calculator.total = calculator.next;
      calculator.next = null;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (!calculator.next) {
        calculator.next = btn;
      } else {
        calculator.next += btn;
      }
      break;
    case '=':
      calculator.total = operate(calculator.total, calculator.next, calculator.operation).toString();
      calculator.next = null;
      break;
    default:
      console.error('Button switch error');
      break;
  }
  return calculator;
}

export default calculate;
