import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { setSession } from "../utils/jwt";

const initialState = {
  isAuth: false,
  isInit: false,
  user: null,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        isAuth: action.payload.isAuth,
        isInit: true,
        user: action.payload.user,
      };
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        user: null,
      };

    case "REGISTER":
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");
        if (accessToken) {
          const res = await axios.get("");
          const { user } = res.data;
          dispatch({
            type: "INIT",
            payload: {
              isAuth: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              isAuth: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            isAuth: false,
            user: null,
          },
        });
      }
    };
    initialize();
  }, []);
  const ApiLogin = async (email, password) => {
    const res = await axios.post("", { email, password });
    const { accessToken, user } = res.data;
    setSession(accessToken);
    dispatch({
      type: "LOGIN",
      payload: {
        user,
      },
    });
  };
  const ApiRegister = async (email, password, firstName) => {
    const res = await axios.post("", { email, password, firstName });
    const { accessToken, user } = res.data;
    // setSession(accessToken);
    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };
  const ApiLogout = async () => {
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "JWT",
        ApiLogin,
        ApiLogout,
        ApiRegister,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
