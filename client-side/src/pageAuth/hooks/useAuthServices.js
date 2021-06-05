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
    console.log("yoooo");
  };

  const register = async (username, email, password) => {

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

  return {
    login,
    logout,
    register,
  };
};
