import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
}

export default function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(null);

	return (
    <UserContext.Provider value={{
      userInfo,
      setUserInfo
    }}>
      {children}
    </UserContext.Provider>
  )
}