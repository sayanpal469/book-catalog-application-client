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
    const authDataString  = localStorage.getItem("auth");
    const authData: IAuthData = authDataString ? JSON.parse(authDataString) : null;

    // console.log(authDataString);

    // const { email, password } = authData;

    if (authData) {
      dispatch(userLoggedIn(authData));
      setAuthChecked(true);
    }
  }, [dispatch]);

  return authChecked;
};

export default useAuthCheck;
