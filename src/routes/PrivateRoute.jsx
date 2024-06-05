import { useContext } from "react";

const PrivateRoute = () => {
    const {user}=useContext(AuthProvider);
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;