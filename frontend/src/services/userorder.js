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


export const getOrders = async (userid, token) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${BACKEND_URL}/userorders/getOrder/${userid}`, requestOptions);

    if (response.status === 201) {
      return;
    } else {
      const errorResponse = await response.json();
      throw new Error(errorResponse);
    }

}