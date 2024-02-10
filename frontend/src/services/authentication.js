// docs: https://vitejs.dev/guide/env-and-mode.html
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export const login = async (email, password) => {
    const payload = {
      email: email,
      password: password,
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
  
    const response = await fetch(`${BACKEND_URL}/tokens`, requestOptions);
  
    // docs: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
    if (response.status === 201) {
      let data = await response.json();
      return data.token;
    } else {
      throw new Error(
        `Received status ${response.status} when logging in. Expected 201`
      );
    }
  };

  export const signup = async (formData) => {
    // IF I LOOP BELOW I CAN SEE WHAT IS BEING RECEIVED INSIDE OF THE formData
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const requestOptions = {
      method: "POST",
      body: formData,
      // If you're sending files, ensure the Content-Type header is not set,
      // so the browser can set it with the correct boundary. For JSON data,
      // you would set 'Content-Type': 'application/json'.
    };
  
    console.log(requestOptions);
  
    let response = await fetch(`${BACKEND_URL}/users`, requestOptions);
  
    if (response.status === 201) {
      // Successfully created
      return;
    } else {
      // Error handling
      throw new Error(`Received status ${response.status} when signing up. Expected 201`);
    }
  };
  

