/* eslint-disable no-console */
import Big from 'big.js'; // eslint-disable-line

function operate(x, y, operation) {
  try {
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
  } catch (error) {
    return 'Error! Press AC';
  }
  return 0;
}

export default operate;
