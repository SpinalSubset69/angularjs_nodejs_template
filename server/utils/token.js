const saveToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};

module.exports = {
  saveToken,
  getToken,
};
