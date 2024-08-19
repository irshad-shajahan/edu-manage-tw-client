import React, { useState } from 'react'
import { Button, Input, Modal } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useUpdateStudentMutation } from '../../redux/features/api/apiSlice';
import { toast } from 'react-toastify';

function StudentModal({ open, setOpen, setAction, action,setFormData,formData }) {
    const [updateStudent, { isLoading }] = useUpdateStudentMutation()
    const addStudentModalOpen = () => {
        setAction('Add Student')
        setOpen(true);
    };
    
    const addStudent = async() => {
        if(!formData.name || !formData.subject || !formData.marks){
            toast.error('Fill in all the details')
            return 
        }
        if(isNaN(formData.marks)){
            toast.error('Marks should be entered in numbers')
            return
        }
        updateStudent({...formData,action}).then((res)=>{
            if(res.data.success){
                setFormData({
                    name: '',
                    subject: '',
                    marks: ''
                  })
                  setOpen(false);
                if(res.data.added){
                    toast.success(res.data.msg)
                }else{
                    toast.warning(res.data.msg)
                }
            }else{
                toast.error(res.data.msg)
            }
        })
    };

    const handleCancel = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value, // Update the specific field in the state
        }));
      };
    return (
        <div className='mt-5'>
            <Button type="default" onClick={addStudentModalOpen} className='bg-black text-white' size='large'>
                Add Student
            </Button>

            <Modal
                open={open}
                title={action}
                confirmLoading={isLoading}
                onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        <CancelBtn />
                        <Button onClick={addStudent} loading={isLoading} className='bg-black text-white'>{action.split(' ')[0]}</Button>

                    </>
                )}
            >
                <div className='flex flex-col gap-5'>
                <Input
        className=''
        size="large"
        placeholder="Name"
        prefix={<UserOutlined />}
        name="name" 
        value={formData.name} 
        onChange={handleChange}
      />
      <Input
        className=''
        size="large"
        placeholder="Subject"
        prefix={<MailOutlined />}
        name="subject" 
        value={formData.subject} 
        onChange={handleChange}
      />
      <Input
        className=''
        size="large"
        placeholder="Mark"
        prefix={<MailOutlined />}
        name="marks" 
        value={formData.marks}
        onChange={handleChange}
      />
                </div>

            </Modal>
        </div>
    )
}

export default StudentModal