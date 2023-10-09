import Navbar from './Nav';
import {logout} from './features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './profile.css'
import { redirect } from 'react-router-dom';
function Profile(){
    const dispatch=useDispatch();
    const user=useSelector(state=>state.log1);
    console.log(user);
    function signOut(){
        const action=logout();
        dispatch(action);
        window.location.replace('/');
    }
    return(
        <>
        <Navbar/>
        <div>
        <span className='title'>Edit Profile</span>
        <div className='profile'>
            <div className='profile-details_total'>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' className='avatar'/>
            <div className='profile-details'>
                <div className='profile_details_div'>
                <span className='subscribed_name'>{user.isAuthenticated&&user.user.email}</span>
                <span className='current_plan'>Plans (Current Plan:premium) </span>
                <span className='renewal'>Renewal date: 04/03/2021</span>
                </div>
                <div className='div_1'><div  className='plan s-btn'><span>Netflix Standard</span><span>1080p</span></div><button className='sub-btn'>Subscribe</button></div>
                <div className='div_1'><div  className='plan s-btn'><span>Netflix Basic</span><span>480p</span></div><button  className='sub-btn'>Subscribe</button></div>
                <div className='div_1'><div  className='plan s-btn'><span className='plan'>Netflix Premium<br/>4K+HDR</span></div><button  className='subscribed'>Current Package</button></div>
            </div>
            </div>
            <button className='signout' onClick={()=>signOut()}>Sign out</button>
        </div>
        </div>
        </>
    )
}
export default Profile;