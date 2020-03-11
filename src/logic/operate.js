import Big from 'big.js'; // eslint-disable-line

function divideNum(x, y) {
  if (y === '0') {
    return 'You cannot divide by 0';
  }
  return Big(x).div(y);
}

function modNum(x, y) {
  if (y === '0') {
    return 'You cannot divide by 0';
  }
  return Big(x).mod(y);
}

function operate(x, y, operation) {
  let result = '';
  try {
    switch (operation) {
      case '+':
        result = Big(x).plus(y);
        break;
      case '-':
        result = Big(x).minus(y);
        break;
      case 'x':
        result = Big(x).times(y);
        break;
      case '/':
        result = divideNum(x, y);
        break;
      case '%':
        result = modNum(x, y);
        break;
      default:
        result = 'Error in operation Switch';
        break;
    }
  } catch (error) { result = 'Error! Press AC'; }
  return result;
}

export default operate;
