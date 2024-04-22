function add(param, param2, param3) {
  const temp = param + param2 + param3 + " <function scope>";
  return temp;
}

console.log(add`<function call> ${1 + 1} ${1 + 2} `);
