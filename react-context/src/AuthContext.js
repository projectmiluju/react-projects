import React, { createContext, useState } from "react";

// Context 생성
const AuthContext = createContext();

// Provider 컴포넌트
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태 변경 함수
  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <AuthContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
