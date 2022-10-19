import React, { useEffect } from "react";
import "./loginScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/auth.action";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(login());
  };
  const navigate = useNavigate();

  useEffect(() => { 
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <div className="login">
      <div className="login__container">
        <img src="./images/logo-white.png" alt="" />
        <button onClick={handleLogin}>Login with Google</button>
        <div className="login__text">
        <span>A cloned YouTube Player</span>
        <span>
          Made with love by
          <code>
            <a href="https://github.com/lys-0243">
              Sylvain Lys
            </a>
          </code>
        </span>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
