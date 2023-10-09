
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './register.css'
function Register({email}){
    const {register,handleSubmit,reset,formState:{errors}}=useForm();
    const registerFun=(data)=>{
        const dataReg={
            email,
            ...data
        }
        console.log(data);
        axios.post(`/signUp`,dataReg).then((res)=>{
               console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        window.location.href='/'
        reset();
    }
    return(
        <div className='register'>
            <div className='body'>
            <h1>Welocme To Netflix</h1>
            <h1>Joining Netflix is easy.</h1>
            <span>Email</span>
           <span>{email}</span>
           <form onSubmit={handleSubmit(registerFun)}>
            <input type="text" {...register('name',{required:true})} placeholder='  Enter your Name' required/>
            {errors?.name&&<p>Name required</p>}
            <input type="password" {...register('password',{required:true,minLength:{value:8,message:"Password must have at least 8 characters"}})} placeholder='  Enter your Password' required/>
            {errors?.password&&<p>{errors.password.message}</p>}
            <button type='submit'>Sign Up</button>
           </form>
           </div>
        </div>
    )
}
export default Register