import { createContext, useReducer } from "react";

export let UserInfo = createContext();

let user = {
  userdata: null,
  bookmarkCollection: [],
  cartCollection: [],
  getProductFn: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setUserdata":
      return { ...state, userdata: action.payload };
    case "setGetProductFn":
      return { ...state, getProductFn: action.payload };

    case "setBookmark":
      return {
        ...state,
        bookmarkCollection: [...state.bookmarkCollection, action.payload],
      };
    case "setCart":
      return {
        ...state,
        cartCollection: [...state.cartCollection, action.payload],
      };

    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, user);
  return (
    <UserInfo.Provider value={{ state, dispatch }}>
      {children}
    </UserInfo.Provider>
  );
};
