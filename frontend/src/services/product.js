const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const createProduct = async (form) => {
    const requestOptions = {
        method: 'POST',
        body: form
    };
    
      // Loop through FormData entries
    //   for (let [key, value] of form.entries()) {
    //     console.log(`Key: ${key}, Value: ${value}`);
    // }

    const response = await fetch(`${BACKEND_URL}/products/create`, requestOptions);

    if (response.status === 201) {
        return;
      } else {
        const errorResponse = await response.json(); 
        const errorMessage = errorResponse.message || `Received status ${response.status} when signing up. Expected 201`;
        throw new Error(errorResponse);
      }
}


export const getAllProducts = async () => {
  const requestOptions = {
    method: 'GET',
    credentials: "include",
  };

  const response = await fetch(`${BACKEND_URL}/products/getProducts`, requestOptions);

  try {
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      const errorResponse = await response.json();
      const errorMessage = errorResponse.message || `Received status ${response.status} when fetching products.`;
      throw new Error(errorMessage);
    }
  } catch (err) {
    // In case response.json() fails, log the raw response text
    const responseClone = response.clone();
    responseClone.text().then((bodyText) => {
      console.error('Error occurred while fetching products:', bodyText);
    });
    throw new Error(`An error occurred: ${err.message}`);
  }
};
