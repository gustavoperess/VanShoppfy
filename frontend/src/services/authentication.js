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
      return data;
    } else {
      throw new Error(
        `User name or password does not match`
      );
    }
  };

  export const signup = async (formData) => {
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    
    let response = await fetch(`${BACKEND_URL}/users`, requestOptions);

    if (response.status === 201) {
      // Successfully created
      return;
    } else {
      // Try to parse error response from backend and throw it
      const errorResponse = await response.json(); // Assuming the backend sends JSON response
      const errorMessage = errorResponse.message || `Received status ${response.status} when signing up. Expected 201`;

      // Throw an error that includes the backend's specific error message
      throw new Error(errorMessage);
    }
};


export const getUserInformationById = async (userid, token) => {
  console.log(userid)
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  let response = await fetch(`${BACKEND_URL}/users/getInformationById/${userid}`, requestOptions);

  if (response.status === 201 || response.status == 200) {
    return await response.json();
  } else {
    const errorResponse = await response.json(); // Assuming the backend sends JSON response
    const errorMessage = errorResponse.message || `Received status ${response.status} when signing up. Expected 201`;
    throw new Error(errorMessage);
  }
};
