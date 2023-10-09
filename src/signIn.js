import {useForm} from 'react-hook-form'
import { login } from './features/user/userSlice';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './signIn.css'
function SignIn({func}){
  const user=useSelector(state=>state);
  const dispatch=useDispatch();
  console.log(user);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm();
     const signIn=(data)=>{
         axios.post(`/login`,data).then((res)=>{
          console.log(res.data);
          const action=login(res.data);
          dispatch(action);
          }).catch((err)=>{
              console.log(err);
          });
         
        reset();
     }
    return(
        <div className='signIn'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(signIn)}>
        <input type='email' placeholder='  Email'  {...register('email', { required: true })} />
        {errors?.email && <p>Email is required.</p>}
        <input type='password' placeholder='  Password' {...register('password',{required:true,minLength:{value:8,message: "Password must have at least 8 characters"}})} required/>
        {errors?.password && <p>{errors.password.message}</p>}
        <button type="submit">Sign In</button>
        </form>
        <div className='end_link'><p>New to Netflix? <span  onClick={()=>func()}>Sign up now.</span></p></div>
      </div>
    )
}
export default SignIn;