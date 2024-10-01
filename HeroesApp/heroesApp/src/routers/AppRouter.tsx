import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../components/screens/Login/Login";
import { useAppSelector } from "../hooks/redux";
import { ProtectedRoutes } from "./ProtectedRoutes";

/*Aca vamos a definir las rutas
Va la url y el componente que queremos que se vea
/: Es para que sea lo primero que aparezca*/

export const AppRouter = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  return (
    <>
      <Routes>
        {isLogged /*si es true va poder acceder a todas las rutas dentro de protectedRoutes*/ ? (
          <Route path="/*" element={<ProtectedRoutes />} />
        ) : (
          <Route path="/*" element={<Navigate to={"/login"} />} />
        )}
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};