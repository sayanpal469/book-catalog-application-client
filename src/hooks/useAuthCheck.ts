import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { userLoggedIn } from "../redux/features/auth/authSlice";

interface IAuthData {
  email: string | null;
  password: string | null;
}

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");

    if (localAuth) {
      const authData: IAuthData = localAuth ? JSON.parse(localAuth) : null;

      dispatch(userLoggedIn(authData));
    }
    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
};

export default useAuthCheck;
