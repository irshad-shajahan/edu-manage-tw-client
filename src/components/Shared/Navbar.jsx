import { Button } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

function Navbar({isLoading}) {
    const navigate = useNavigate()
    const user = useSelector((state)=>state.user.user)
    function logOut(){
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to logout ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('tw_teacher_token')
                navigate('/login')
            }
        });
    
    }
    return (
        <div className='flex justify-between py-3 w-full px-10 bg-white font-mont'>
            <h5 className='text-red-500 font-bold text-xl'>EduManage.</h5>
            <p className='font-semibold'>Welcome <span className='text-red-500'>{user?.name}</span></p>
            <div className="flex gap-10 font-semibold items-center">
                <a href="/">Home</a>
                <Button onClick={logOut} loading={isLoading} type="default" className='bg-red-500 text-white w-24 h-10'>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Navbar