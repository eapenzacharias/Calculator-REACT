/* eslint-disable no-console */
import operate from './operate';

function negate(num) {
  let next = num;
  if (!next) {
    next = '-';
  } else {
    next = `-${next}`;
  }
  return next;
}

function number(num, btn) {
  let next = num;
  if (!next) {
    next = btn;
  } else {
    next += btn;
  }
  return next;
}

function calculate(btn, calculator) {
  let { total, next, operation } = calculator;
  switch (btn) {
    case 'AC':
      [total, next, operation] = ['0', null, null];
      break;
    case '+/-':
      next = negate(next);
      break;
    case '+': case '-': case 'x': case '/': case '%':
      [total, next, operation] = [next, null, btn];
      break;
    case '0': case '1': case '2': case '3': case '4': case '5': case '6': case '7': case '8': case '9': case '.':
      next = number(next, btn);
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
