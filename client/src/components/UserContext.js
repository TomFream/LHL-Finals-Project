import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const value = useState({});
  return (<UserProvider value={value}>{children}</UserProvider>);
}