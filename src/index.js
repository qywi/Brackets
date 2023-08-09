module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (const c of str) {
      if (bracketsConfig.some(pair => pair[0] === c)) {
          stack.push(c);
      } else if (bracketsConfig.some(pair => pair[1] === c)) {
          if (stack.length === 0) {
              return false;
          }
          const ver = stack.pop();
          if (!bracketsConfig.some(pair => pair[0] === ver && pair[1] === c)) {
              return false;
          }
      }
  }

  return stack.length === 0 ? true : false;
}