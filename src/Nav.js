import React,{useEffect,useState} from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {logout} from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
function Navbar(){
    const user=useSelector(state=>state);
    const [show,setShow]=useState(false);
    const dispatch=useDispatch();
    function handleShow(){
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleShow);
    },[]);
    return(
        <div className={`navbar ${show && 'navbar_black' }`}>
            <div className='navbar_content'>
            <img className='navbar_logo' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt='img'/>
            <Link to="/profile">
            <img className='navbar_avatar' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' alt='img'/>
            </Link>
            </div>
        </div>
    )
}
export default Navbar