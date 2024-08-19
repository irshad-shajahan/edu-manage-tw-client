import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../../redux/features/api/apiSlice';
import { setUser } from '../../redux/features/userSlice';

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const token = localStorage.getItem('tw_teacher_token');
  const { data, isSuccess,isLoading, error, isError } = useGetUserDetailsQuery();
  if (isSuccess && !isLoading) {
    dispatch(setUser(data?.teacher));
  }

  if (isError && error.status === 401) {
    // Handle 401 Unauthorized: Clear localStorage and navigate to login
    localStorage.clear();
    return <Navigate to="/login" />;
  } 

  if (token) {
    try {
      if (data) {
        if (!data.success) {
          localStorage.clear();
          return <Navigate to="/login" />;
        }
      }
    } catch (err) {
      console.log('error in protected route', err);
    }
  }
  if (localStorage.getItem('tw_teacher_token')) {
    return children;
  }
  return <Navigate to="/login" />;
}
