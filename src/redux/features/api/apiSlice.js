import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  import.meta.env.MODE === "development" ? "http://localhost:8080/api" : "/api";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    headers.set(
      "authorization",
      `Bearer ${localStorage.getItem("tw_teacher_token")}`
    );
    headers.set("credentials", "include");
    return headers;
  },
  credentials: "include",
});
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["teacher,student"],
  endpoints: (builder) => ({
    teacherLogin: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teacher"],
    }),
    teacherRegister: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["teacher"],
    }),
    updateStudent:builder.mutation({
      query: (data) => ({
        url: "/student-actions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["student"],
    }),
    getUserDetails: builder.query({
      query: () => "/getUserData",
      providesTags: ["teacher"],
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tw_teacher_token")}`,
      },
    }),
    getStudents: builder.query({
      query: () => "/get-students",
      providesTags: ["student"],
      headers: {
        Authorization: `Bearer ${localStorage.getItem("tw_teacher_token")}`,
      },
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useTeacherRegisterMutation,
  useTeacherLoginMutation,
  useUpdateStudentMutation,
  useGetStudentsQuery
} = apiSlice;
