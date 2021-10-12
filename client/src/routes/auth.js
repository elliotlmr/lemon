const token = localStorage.getItem("lemonToken");

export const isLogin = () => {
  return Number(token?.split("lemonAccess")[1]) +
    25000000 -
    new Date().getTime() >
    0
    ? true
    : false;
};
