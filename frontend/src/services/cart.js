const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const addItemToCart = async (productId) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId }),
    };
        // Loop through FormData entries
    //   for (let [key, value] of productId.entries()) {
    //     console.log(`Key: ${key}, Value: ${value}`);
    // }

    const response = await fetch(`${BACKEND_URL}/carts/addItem`, requestOptions);
    
    if (response.status === 201) {
        return;
      } else {
        const errorResponse = await response.json(); 
        const errorMessage = errorResponse.message || `Received status ${response.status} when signing up. Expected 201`;
        throw new Error(errorResponse);
      }
}