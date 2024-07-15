import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuhtContext } from "../context/AuthContext";

export const PrivateRouter = ({ children }) => {
    const auth = useContext(AuhtContext);
    return auth.email ? children : <Navigate to='/'/>;
}