import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const PrivateRoute = ({ component }) => {
  const [cookies] = useCookies(['session']);

  if (!cookies.session) {
    return <Navigate to="/login" />;
  }

  return component;
};

export default PrivateRoute;
