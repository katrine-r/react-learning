import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import { AuthContext } from "./context";
import RequireAuth from "./hoc/RequireAuth";
import SignIn from "./pages/SignIn";
import { routes } from "./routes";

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  console.log("isAuth", isAuth);

  const { test } = useSelector(state => state.test)
  console.log("test", test);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Layout />}>
          {routes.map((i) => (
              <Route
                path={i.path}
                element={
                  i.isPrivate ? (
                    <RequireAuth isAuth={isAuth}> {i.element} </RequireAuth>
                  ) : (
                    i.element
                  )
                }
              />
            ))}
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="*"
            element={<Navigate to={isAuth ? "/" : "/signin"} replace />}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
