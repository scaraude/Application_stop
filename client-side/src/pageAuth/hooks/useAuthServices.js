export const useAuthServices = () => {
  const login = async (username, password) => {
    const response = await fetch("api/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const user = await response.json();
    if (user.accessToken) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  const register = async (username, email, password) => {
    console.log(`username, email, password`, username, email, password);
    return await fetch("api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
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
