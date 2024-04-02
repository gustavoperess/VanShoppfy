const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const addItemToCart = async (productId) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId }),
          credentials: 'include', 
    };
        // Loop through FormData entries
    //   for (let [key, value] of productId.entries()) {
    //     console.log(`Key: ${key}, Value: ${value}`);
    // }

    const response = await fetch(`${BACKEND_URL}/carts/addItem`, requestOptions);
    if (response.status === 201 || response.status == 200) {
      return await response.json(); // Assuming the server sends back some data on success
    } else {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || `Received status ${response.status} when adding item to cart. Expected 201`;
        throw new Error(errorMessage);
    }
}

export const deleteProductById = async (productId) => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', 
      }

      const response = await fetch(`${BACKEND_URL}/carts/deleteItem/${productId}`, requestOptions)

      if (response.status === 200) {
        const data = await response.json();
        console.log("Product deleted ")
        return data
      } else {
        const errorResponse = await response.json(); 
        throw new Error(errorResponse);
      }
}


export const getProductBySessionId = async () => {
    const requestOptions = {
        method: 'GET',
        credentials: 'include', 
    };

    const response = await fetch(`${BACKEND_URL}/carts/getItems`, requestOptions);
    console.log(response)
    if (response.status === 200) {
      const data = await response.json();
      return data
    } else {
      const errorResponse = await response.json(); 
      const errorMessage = errorResponse.message || `Received status ${response.status} when signing up. Expected 201`;
      throw new Error(errorResponse);
    }
}