export default function hasValuesFromArray(mySet, myArray) {
  let result = true;
  /* eslint-disable-next-line no-plusplus */
  for (let i = 0; i < myArray.length; i++) {
    if (mySet.has(myArray[i])) {
      /* eslint-disable-next-line no-continue */
      continue;
    }
    result = false;
    break;
  }
  return result;
}
