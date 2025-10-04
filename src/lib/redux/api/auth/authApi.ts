import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string; user: { id: string; name: string; email: string } },
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),

    register: builder.mutation<
      { message: string },
      { name: string; email: string; password: string }
    >({
      query: (newUser) => ({
        url: "/auth/register",
        method: "POST",
        body: newUser,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
