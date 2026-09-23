import React from 'react'
import WebLayout from '../layouts/WebLayout'
import { useForm } from 'react-hook-form'

const Enrollment = () => {
    const { register, handleSubmit, reset } = useForm()

    const submitEnrollment = (data) => {
        console.log(data)
        reset()
    }
  return (
    <WebLayout>
        <div className='mx-auto max-w-xl'>
        <div className='font-bold'>Enrollment</div>
            <form onSubmit={handleSubmit(submitEnrollment)}>
                <div>
                    <input {...register("name")}
                    type="text" placeholder='Enter name' />
                </div>
                <div>
                    <input {...register("password")}
                    type="password" placeholder='Enter password' />
                </div>
                <div>
                    <select {...register("session")}>
                        <option value="">Choose</option>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                    </select>
                </div>
                <div>
                    <input {...register("license")} type="checkbox" />
                    <label htmlFor="">I agreed to the terms</label>
                </div>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>
        
    </WebLayout>
  )
}

export default Enrollment