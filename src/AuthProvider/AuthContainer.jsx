import React, { createContext, useState } from "react";

export const AuthContainVal = createContext();
function AuthContainer({ children }) {
  const [products, setProducts] = useState([]);
 console.log(products)
  return (
    <AuthContainVal.Provider value={{ products, setProducts }}>
      {children}
    </AuthContainVal.Provider>
  );
}

export default AuthContainer;
