import React from 'react'

const Login = () => {
    return (
        <div className='login'>
            <div className='top'>
                <div className='login-wrapper'>
                    <img className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commos/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt="" />
                </div>
            </div>
            <div className='login-container'>
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone Number'></input>
                    <input type="password" placeholder='Password'></input>
                    <button className='loginButton'>Sign In</button>
                    <span>
                        New to Netflix? <b>Sign Up</b>
                    </span>
                    <small>
                        this page is protected by Google reCAPTCHA to ensure you are a bot. <b>learn More</b>
                    </small>
                </form>
            </div>
        </div>
    )
}
export default Login;
