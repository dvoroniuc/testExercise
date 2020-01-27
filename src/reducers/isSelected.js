const selectedReducer = (state = NaN, action) => {
  switch (action.type) {
    case "SELECT":
      return (state = action.payload);
    case "RESET":
      return (state = null);
    default:
      return state;
  }
};

export default selectedReducer;
