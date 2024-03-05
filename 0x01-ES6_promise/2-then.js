/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then(() => {
        resolve({ status: 200, body: 'success' });
        console.log('Got a response from the API');
      })
      .catch(() => {
        console.error('Got a response from the API');
        reject(new Error());
      });
  });
}
