import React from 'react';
import SignupLoginNavbar from '../Navbar/loginSignupNavbar'; 

const SigninForm = () => {
    return (
        <React.Fragment>
            <SignupLoginNavbar/>
            <div className="container-form">
                <div className="login-form">
                    <div className="panel">
                        <span className="login-title">Login</span>
                    </div>
                    <form id="Login" className="main-div">
                        <div className="wrap-input">
                            <input type="email" className="input" id="inputEmail" placeholder="Email Address" />
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="forgot">
                            <small>Don't have an account?<a href="/signup"> Sign up here</a></small><br />
                            <a href="reset.html">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-pri">Login</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SigninForm;
