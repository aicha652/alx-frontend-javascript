/* eslint-disable no-unused-vars */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    try {
	  resolve({ status: 200, body: 'success' });
	  reject();
	  console.log('Got a response from the API');
    } catch (error){
	    throw(error);
    }
  });
}
