export const loginReducer = (userState: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...userState,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...userState,
        user: null,
      };
    default:
      return userState;
  }
};
