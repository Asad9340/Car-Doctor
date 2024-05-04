import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../firebase/AuthProvider';
import Loader from '../components/Spinner/Loader';
function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <Loader />;
  }
  return <Navigate to="/signin" state={location?.pathname} />;
}

export default PrivateRoute;
