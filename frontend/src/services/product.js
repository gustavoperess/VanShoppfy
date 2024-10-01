const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const createProduct = async (form) => {
  const requestOptions = {
      method: 'POST',
      body: form,
      headers: {
          'Content-Type': 'multipart/form-data', // or 'application/json' if you're sending JSON
          'Accept': 'application/json', // Specify that you expect JSON back
      },
      credentials: 'include', // Include credentials if necessary
  };

  const response = await fetch(`${BACKEND_URL}/products/create`, requestOptions);

  if (response.status === 201) {
      return;
  } else {
      const errorResponse = await response.json(); 
      const errorMessage = errorResponse.message || `Received status ${response.status} when creating product. Expected 201`;
      throw new Error(errorMessage); // Changed from errorResponse to errorMessage
  }
};


export const getAllProducts = async () => {
  const requestOptions = {
      method: 'GET',
      credentials: 'include', 
      headers: {
          'Accept': 'application/json', 
      },
  };

  try {
      const response = await fetch(`${BACKEND_URL}/products/getProducts`, requestOptions);

      // Check if the response status is OK (200)
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          // Try parsing the response as JSON
          const errorResponse = await response.json();
          const errorMessage = errorResponse.message || `Received status ${response.status}`;
          throw new Error(errorMessage);
      }
  } catch (err) {
      console.error('Error fetching products information:', err);
      throw err; // Re-throw the error to handle it higher in the call chain
  }
};
