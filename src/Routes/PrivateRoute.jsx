import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../components/Spinner/Loader';
import { AuthContext } from '../firebase/AuthProvider';
function PrivateRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={location?.pathname} />;
}

export default PrivateRoute;