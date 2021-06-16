import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const value = useState({
    name: 'Goku',
    occupation: "Earth's Greatest Fighter",
    powerLevel: "> 9000",
    favoriteActivity: "Punching",
    nemesis: "Frieza",
    knownTech: "JavaScript, React, Ruby On Rails, and SQL"
  });
  
  return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}