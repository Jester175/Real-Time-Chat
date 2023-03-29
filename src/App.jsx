import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { AppRouter } from "./components/app-router/AppRouter";
import { Navbar } from "./components/navbar/Navbar";
import { Spinner } from "./components/spinner/Spinner";
import { context } from "./context/Context";

export const App = () => {
  const { auth } = useContext(context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className='screen'>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
};
