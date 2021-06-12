import React, { useState } from 'react';

const useUserObj = () => {
  const [user, setUser] = useState({});

  return [user, setUser];
}

export default useUserObj;