export default function divideFunction(numerator, denominator) {
  if (denominator !== 0) {
    const divide = numerator / denominator;
    console.log(divide);
  }
  throw Error('cannot divide by 0');
}
