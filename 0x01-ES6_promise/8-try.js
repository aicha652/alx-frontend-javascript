export default function divideFunction(numerator, denominator) {
  if (denominator !== 0) {
    const divide = numerator / denominator;
    return divide;
  }
  throw Error('cannot divide by 0');
}
