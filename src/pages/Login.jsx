import React, { useState } from 'react';
import { Button, Input, Space, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined } from '@ant-design/icons';
import { useTeacherLoginMutation } from '../redux/features/api/apiSlice';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../lib/validations';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();
  const [login, { isLoading }] = useTeacherLoginMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      message.error('Please enter both email and password');
      return;
    }
    if(validateEmail(email)!=="Valid email"){
      toast.error(validateEmail(email));
      return
    } 
    try {
      await login({ email, password }).then((res)=>{
        if(res?.error?.status===403){
          toast.error(res.error.data.message)
        }
        console.log(res)
        if(res?.data?.success){
          const token = res.data.token
          localStorage.setItem("tw_teacher_token", token)
          toast.success('Login succesful')
          navigate('/')
        }else{
          toast.error(res.data.msg)
        }
      });
    } catch (error) {
      console.error(error); 
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center font-mont'>
      <h2 className='font-[600] text-4xl -mt-14 mb-14 text-red-500'>EduManage.</h2>
      <div className='w-[40%] h-[60%] bg-white shadow-xl flex flex-col items-center justify-center px-20 gap-10'>
        <h5 className='text-black font-bold text-xl'>Teacher's Login</h5>
        <Input 
          className='' 
          size="large" 
          placeholder="email" 
          prefix={<UserOutlined />} 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input.Password 
          className=''
          placeholder="password"
          size='large'
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          loading={isLoading} 
          type="default" 
          className='bg-black text-white w-40 h-12' 
          size="large"
          onClick={handleLogin}
        >
          Login
        </Button>
        <p>Not a teacher? <a href="/register" className='text-blue-500'>register as teacher</a></p>
      </div>
    </div>
  );
}

export default Login;