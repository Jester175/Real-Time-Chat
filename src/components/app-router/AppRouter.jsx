import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { v4 } from "uuid";
import {useAuthState} from 'react-firebase-hooks/auth'
import { privateRoutes, publicRoutes } from "../../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../../utils/consts";
import { context } from "../../context/Context";

export const AppRouter = () => {
  const {auth} = useContext(context);
  const [user] = useAuthState(auth);

  console.log(user);
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={v4()} path={path} Component={Component} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />;
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={v4()} path={path} Component={Component} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />;
    </Routes>
  );
};
