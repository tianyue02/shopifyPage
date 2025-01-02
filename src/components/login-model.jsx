import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/auth-context"

const Login = () => {
  const { isLoggedIn, username, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
        </div>
      ) : (
        <div>
          <p>Logged in as {username}</p>
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
};
export default Login;

