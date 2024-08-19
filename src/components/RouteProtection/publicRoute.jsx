// import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function PublicRoute({children}){
    const navigate = useNavigate()
    if(localStorage.getItem("tw_teacher_token")){
       navigate(-1)
       return
    }
    return children
}