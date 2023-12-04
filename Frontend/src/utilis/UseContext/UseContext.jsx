import { createContext, useReducer } from "react";

export let UserInfo = createContext();

let Ecommerce = {
  userdata: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setUserdata":
      return { ...state, userdata: action.payload };

    default:
      return state;
  }
};

export const UserContexProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, Ecommerce);
  return (
    <UserInfo.Provider value={{ state, dispatch }}>
      {children}
    </UserInfo.Provider>
  );
};
