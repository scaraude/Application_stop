export const useCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
