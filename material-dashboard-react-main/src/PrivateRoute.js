import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 keycloak.refreshToken;
 
 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : null;
};

export default PrivateRoute;