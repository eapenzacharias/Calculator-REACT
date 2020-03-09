/* eslint-disable no-console */
import operate from './operate';

function calculate(btn, calculator) {
  let cal = calculator;
  switch (btn) {
    case 'AC':
      cal = {
        total: null,
        next: null,
        operation: null,
      };
      break;
    case '+/-':
      cal.next *= -1;
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
    case '%':
      cal.operation = btn;
      cal.total = cal.next;
      cal.next = null;
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
      if (!cal.next) {
        cal.next = btn;
      } else {
        cal.next += btn;
      }
      break;
    case '=':
      cal.total = operate(cal.total, cal.next, cal.operation).toString();
      cal.next = null;
      break;
    default:
      console.error('Button switch error');
      break;
  }
  return cal;
}

export default calculate;
