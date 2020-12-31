export const increment = () => {
  return {
    type: "INCREMENT",
    payload: 5,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    payload: 5,
  };
};

export const signIn = () => {
  return {
    type: "SIGN_IN",
    info: "Boom u got in",
  };
};
