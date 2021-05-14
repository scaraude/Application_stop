export const useAuthServices = () => {
  const login = (username, password) => {
    return fetch("/signin", {
      method: "POST",
      body: { username, password },
    }).then((response) => {
      console.log(`response`, response);
      if (response.json().accessToken) {
        localStorage.setItem("user", JSON.stringify(response.json()));
      }

      return response.json();
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const register = (username, email, password) => {
    return fetch("/signup", {
      method: "POST",
      body: {
        username,
        email,
        password,
      },
    });
  };

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
      return { Authorization: "Bearer " + user.accessToken };
    } else {
      return {};
    }
  };

  return {
    login,
    logout,
    register,
    getCurrentUser,
    authHeader,
  };
};
