import './login.css'
import Register from '../register';
import { useState } from 'react';
import SignIn from '../signIn';
function Login(){
    const [signIn,setSignIn]=useState(false);
    const [register,setRegister]=useState(false);
    const [email,setEmail]=useState('');
    const handleSignIn=()=>{
        setSignIn(false);
        setRegister(false);
    }
    let handleOnChange = ( email ) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ( re.test(email) ) {
            setRegister(true);
        }
        else {
            alert('Enter email')
        }
    }
    return(
        <div className={register?"login_reg":"login"}>
         <div className={!register&&'login_gradent'}/>
            <div className={register?"login_header_reg":'login_header'}>
            <img className={register?"login_logo_reg":'login_logo'} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
            {!signIn&&<button className={register?"signIn_btn_reg":'signIn_btn'} onClick={()=>setSignIn(true)}>Sign In</button>}
            </div>
            <div className={register?'reg_container':'container'}>
                {signIn?<SignIn func={handleSignIn}/>:register?<Register email={email}/>:
                 <>
                 <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
                 <h3>Endless entertainment starts at just ₹ 149. Cancel anytime.</h3>
                 <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                 <div className='login_input'>
                    <form>
                    <input type='email' placeholder='  Email address' required onChange={(e)=>setEmail(e.target.value)}/>
                    <button onClick={()=>{email&&handleOnChange(email)}}>Get Started</button>
                    </form>
                </div>
                 </>
                }
               
            </div>
        </div>
    )




    
}
export default Login;