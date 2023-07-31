import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";

const useAuth = () => {
  const [isLoggin, setIsLoggin] = useState(false);
  const { user } = useAppSelector((state) => state.user);

  console.log(user)

  useEffect(() => {
    if (user != undefined) {
      setIsLoggin(true);
    } else {
      setIsLoggin(false);
    }
  }, [user]);

  return isLoggin;
};

export default useAuth;
