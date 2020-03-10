/* eslint-disable no-console */
import operate from './operate';
import Big from 'big.js'; // eslint-disable-line

function calculate(btn, calculator) {
  let { total, next, operation } = calculator;
  switch (btn) {
    case 'AC':
      total = '0';
      next = null;
      operation = null;
      break;
    case '+/-':
      if (!next) {
        next = '-';
      } else {
        next = `-${next}`;
      }
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
    case '%':
      operation = btn;
      total = next;
      next = null;
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
      if (!next) {
        next = btn;
      } else {
        next += btn;
      }
      break;
    case '=':
      total = operate(total, next, operation).toString();
      next = total;
      break;
    default:
      console.error('Button switch error');
      break;
  }
  return { total, next, operation };
}

export default calculate;
