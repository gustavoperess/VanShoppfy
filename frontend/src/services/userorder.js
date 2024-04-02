const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const createOder = async (formData, userid) => {
      const requestOptions = {
        method: 'POST',
        body: formData,

    };
      // Loop through FormData entries
    //   for (let [key, value] of formData.entries()) {
    //     console.log(`Key: ${key}, Value: ${value}`);
    // }

    const response = await fetch(`${BACKEND_URL}/userorders/createOrder/${userid}`, requestOptions);

    if (response.status === 201) {
        return;
      } else {
        const errorResponse = await response.json();
        throw new Error(errorResponse);
      }
}


export const getUserOrders = async (userid, token) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${BACKEND_URL}/userorders/getOrders/${userid}`, requestOptions);

    if (response.status === 200) {
      const items = await response.json();
      const orders = items.orders
      const products = items.products
      return { orders, products };
    } else  {
      const errorResponse = await response.json(); 
      const errorMessage = errorResponse.message || `Received status ${response.status}`;
      throw new Error(errorMessage);
    }
 
}