module.exports = function check(str, bracketsConfig) {
  const stack = [];

  const bracketMap = new Map(bracketsConfig);

  for (let i = 0; i < str.length; i++) {
    let symbol = str[i];

    if (bracketMap.has(symbol)) {
      if (stack.length > 0 && stack[stack.length - 1] === symbol && bracketMap.get(symbol) === symbol) {
        stack.pop();
      } else {
        stack.push(symbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];

      if (bracketMap.get(topElement) === symbol) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
};
