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

  try {
    const response = await fetch(`${BACKEND_URL}/products/getProducts`, requestOptions);

    // Check if the response status is OK (200)
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      // Try parsing the response as JSON, or fallback to text if it's not JSON
      try {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.message || `Received status ${response.status}`;
        throw new Error(errorMessage);
      } catch (jsonError) {
        // If parsing as JSON fails, fall back to reading the text of the response
        const errorText = await response.text();
        console.error("Received the following instead of valid JSON:", errorText);
        throw new Error(`Unexpected response: ${errorText}`);
      }
    }
  } catch (err) {
    console.error('Error fetching products information:', err);
    throw err; // Re-throw the error to handle it higher in the call chain
  }
};