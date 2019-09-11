export function subtract(a, b) {
  var c;
  if (a >= b) {
    c = a - b;
  } else {
    c = b - a;
  }
  return c;
}
