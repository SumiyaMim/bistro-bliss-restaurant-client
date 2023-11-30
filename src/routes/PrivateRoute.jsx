import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return  (
            <div className='flex justify-center'>
                <span className="loading loading-ring loading-lg"></span>
            </div> 
        )
    }

    if (user) {
        return children;
    }
    return <Navigate to="/signin" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;