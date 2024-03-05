/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        resolve({ status: 200, body: 'success' });
      })
      .catch(() => {
        reject(new Error());
      });
    console.log('Got a response from the API');
  });
}
