import { createContext, useReducer } from "react";

export let UserInfo = createContext();

let user = {
  userdata: null,
  // cartCollection: [],
  getProductFn: null,
  getCartFn: null,
  getBookmarkFn: null,
  editMode: false,
  editingData: null,
  OrderDetail: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setUserdata":
      return { ...state, userdata: action.payload };
    case "setGetProductFn":
      return { ...state, getProductFn: action.payload };
    case "setGetCartFn":
      return { ...state, getCartFn: action.payload };
    case "setGetBookmarkFn":
      return { ...state, getBookmarkFn: action.payload };
    case "setEditingData":
      return { ...state, editingData: action.payload };
    case "setOrderDetail":
      return { ...state, OrderDetail: action.payload };
    case "setEditingmode":
      return { ...state, editMode: action.payload };

    // case "setCart":
    //   return {
    //     ...state,
    //     cartCollection: [...state.cartCollection, action.payload],
    //   };

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
