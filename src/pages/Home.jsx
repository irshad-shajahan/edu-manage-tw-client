import React, { useState } from 'react'
import StudentTable from '../components/Home/StudentTable'
import Navbar from '../components/Shared/Navbar'
import StudentModal from '../components/Home/StudentModal'
import { useSelector } from 'react-redux';

function Home() {
  const isLoading = useSelector((state) => state.alerts.loading);
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState('')
  const [formData, setFormData] = useState({
    studentId:'',
    name: '',
    subject: '',
    marks: ''
  });
  return (
    <div className='h-screen w-full'>
      <Navbar isLoading={isLoading} />
      <div className='bg-white px-10 py-5 mx-10 mt-5 h-[85%]'>
        <StudentTable setFormData={setFormData} setAction={setAction} setOpen={setOpen} isLoading={isLoading} />
        <StudentModal formData={formData} setFormData={setFormData} setAction={setAction} action={action} setOpen={setOpen} open={open} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default Home