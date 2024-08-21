import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,UserOutlined,MailOutlined  } from '@ant-design/icons';
import { useTeacherRegisterMutation } from '../redux/features/api/apiSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import { validateEmail, validatePassword } from '../lib/validations';

function Register() {
  const navigate = useNavigate()
  const [register, { isLoading }] = useTeacherRegisterMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandler = async () => {
    // Basic form validation
    if (!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    if(validateEmail(email)!=="Valid email"){
      toast.error(validateEmail(email));
      return
    }

    if(validatePassword(password)!=="Valid password"){
      console.log(validatePassword(password)[0]);
      toast.error(validatePassword(password)[0]);
      return
    }

    try {
      await register({ name, email, password }).then((res)=>{
        if(res.data.success){
          const token = res.data.token
          localStorage.setItem("tw_teacher_token", token)
          toast.success('teacher registered succesfully')
          navigate('/')
        }else{
          toast.error(res.data.msg)
        }
        
      });
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center font-mont'>
      <h2 className='font-[600] text-4xl -mt-14 mb-14 text-red-500'>EduManage.</h2>
      <div className='w-[90%] lg:w-[40%] h-[60%] lg:h-[70%] bg-white shadow-xl flex flex-col items-center justify-center px-5 lg:px-20 gap-10'>
        <h5 className='font-bold text-xl'>Register New Teacher</h5>
        <Input 
          className='' 
          size="large" 
          placeholder="name" 
          prefix={<UserOutlined />} 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input 
          className='' 
          size="large" 
          placeholder="email" 
          prefix={<MailOutlined />} 
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
          onClick={registerHandler}
        >
          Register
        </Button>
        <p className=''>Already Registered? <a href="/login" className='text-blue-500'>Login Now</a></p>
      </div>
    </div>
  );
}

export default Register;