import Big from 'big.js';

function operate(x, y, operation) {
  switch (operation) {
    case '+':
      return Big(x).plus(y);
    case '-':
      return Big(x).minus(y);
    case 'x':
      return Big(x).times(y);
    case '/':
      if (y === '0') {
        return 'You cannot divide by 0';
      }
      return Big(x).div(y);
    case '%':
      if (y === '0') {
        return 'You cannot divide by 0';
      }
      return Big(x).mod(y);
    default:
      console.error('Error in operation Switch');
      break;
  }
  return 0;
}

export default operate;
