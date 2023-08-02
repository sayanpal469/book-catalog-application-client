// import { IUser } from "../../../types/userTypes";
import { api } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),

      async onQueryStarted({ queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        dispatch(userLoggedIn(result.data.data));
        const { email, password } = result.data.data;
        const authData = { email, password };
        localStorage.setItem("auth", JSON.stringify(authData));
      },
    }),
    login: builder.mutation({
      query: (payload) => ({
        url: "/auth/login",
        method: "POST",
        body: payload,
      }),

      async onQueryStarted({ queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        dispatch(userLoggedIn(result.data));
        const { email, password } = result.data.data;
        const authData = { email, password };
        localStorage.setItem("auth", JSON.stringify(authData));
      },
    }),
    forgotPassword: builder.mutation({
      query: ({ email, data }) => ({
        url: `/auth/forgotPass/${email}`,
        method: "PATCH",
        data: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
} = authApi;
