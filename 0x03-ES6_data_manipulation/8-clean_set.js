export default function cleanSet(mySet, myStr) {
  let text = '';
  let restValue = '';
  if (myStr === '') {
    return text;
  }
  for (const value of mySet) {
    if (value.startsWith(myStr) === true) {
      restValue = value.slice(myStr.length);
      text += `${restValue}-`;
    }
  }
  if (text.endsWith('-') === true) {
    text = text.slice(0, text.length - 1);
  }
  return text;
}
