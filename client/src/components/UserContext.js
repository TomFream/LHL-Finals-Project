import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  // const [ user, setUser ] = useState({});
  // const value = [ user, setUser ];
  const value = useState({});
  return (<UserProvider value={value}>{children}</UserProvider>);
}