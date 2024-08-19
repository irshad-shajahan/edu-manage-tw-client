import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useGetStudentsQuery, useUpdateStudentMutation } from '../../redux/features/api/apiSlice'
import { useDispatch } from 'react-redux'
import { hideLoading, showloading } from '../../redux/features/loaderSlicer'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'

function StudentTable({ setOpen, setAction,setFormData }) {
    const { data, isLoading, isSuccess } = useGetStudentsQuery()
    const [updateStudent, updateActions] = useUpdateStudentMutation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isLoading) {
            dispatch(showloading())
        } else {
            dispatch(hideLoading())
        }
    }, [isLoading, isSuccess, dispatch])

    function deleteStudent(studentId) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (!updateActions.isLoading) {
                    updateStudent({ studentId, action: 'Delete Student' }).then((res) => {
                        if(res.data.success){
                            toast.success(res.data.msg)
                        }else{
                            toast.error(res.data.msg)
                        }
                    })
                }
            }
        });
    }

    return (
        !isLoading && isSuccess ? <div className='font-mont bg-gray-50 px-10 py-5 mt-5 h-[85%] overflow-auto'>
            {data?.students?.length === 0 ?
                <div className='flex justify-center items-center'>
                    <h3 className='text-4xl uppercase font-semibold'>There are no students added</h3>
                </div>
                : <table className='w-full'>
                    <thead>
                        <tr className='border-b'>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left w-1/2">Subject</th>
                            <th className="px-4 py-2 text-left">Mark</th>
                            <th className="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.students?.map((student, index) => (
                            <tr className="border-b" key={index}>
                                <td className="px-4 py-2">{student?.name}</td>
                                <td className="px-4 py-2 w-1/2">{student?.subject}</td>
                                <td className="px-4 py-2">{student?.marks}</td>
                                <td className="px-4 py-2 flex gap-4">
                                    <Button onClick={() => {
                                        setAction('Edit Student')
                                        setOpen(true)
                                        setFormData({
                                            name:student?.name,
                                            subject:student?.subject,
                                            marks:student?.marks,
                                            studentId:student._id
                                        })
                                    }} className='bg-blue-500 text-white'><EditOutlined /></Button>
                                    <Button className='bg-red-500 text-white' onClick={() => deleteStudent(student?._id)}><DeleteOutlined /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
        </div> : null
    )
}

export default StudentTable