/* eslint-disable no-prototype-builtins */
import { useState, FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import Error from "../Error/Error";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [login, { data, isError, isLoading, isSuccess, error: responseError }] =
    useLoginMutation();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isFetchBaseQueryError(error: any): error is FetchBaseQueryError {
      return error && error.hasOwnProperty('data') && typeof error.data === 'object';
    }
    

  useEffect(() => {
    if (isSuccess == true && data?.success == true) {
      if (data?.data?.email && data?.data?.password) {
        navigate("/");
      }
    } else {
      // console.log(responceError?.data)
      if (isError && isFetchBaseQueryError(responseError)) {
        const responseData = responseError.data as { message: string };
        setError(responseData.message);
      }
    }
  }, [data, responseError, navigate, isError, isSuccess]);

  const handelEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handelPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handelSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const option = {
      email: email,
      password: password,
    };

    login(option);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="object-cover w-10 h-10"
            src="https://i.ibb.co/LQGMn6s/navBook.png"
            alt=""
          />
        </Link>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm dark:text-gray-400">
              Sign in to access your account
            </p>
          </div>
          <form onSubmit={handelSubmit} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handelEmail}
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm">Password</label>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="text-xs hover:underline dark:text-gray-400"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="*****"
                  value={password}
                  onChange={handelPassword}
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button
                  disabled={isLoading}
                  type="submit"
                  className="w-full btn btn-warning"
                >
                  Sign in
                </button>
              </div>
              <p className="px-6 text-sm text-center dark:text-gray-400">
                Don't have an account yet?
                <Link
                  rel="noopener noreferrer"
                  to="/signUp"
                  className="ml-2 hover:underline dark:text-violet-400"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </form>
          {error !== "" && <Error message={error} />}
        </div>
      </div>
    </div>
  );
};

export default Login;
