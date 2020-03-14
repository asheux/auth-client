import React from 'react';
import SignupLoginNavbar from '../Navbar/loginSignupNavbar';

const SignupForm = (props) => {
    const { handleSubmit, handleChange, message } = props;
    const sty = {'color': 'red', 'textAlign': 'center'};

    return (
        <React.Fragment>
            <SignupLoginNavbar/>
            <div className="container-form">
                <div className="login-form">
                    <div className="panel">
                        <span className="login-title">Create an account</span>
                    </div>
                        <div style={sty}><p>{message}</p></div>
                    <form id="Login" className="main-div" onSubmit={handleSubmit}>
                        <div className="wrap-input">
                            <input onChange={handleChange} required name="name" type="name" className="input" id="inputUname" placeholder="Your Name" />
                        </div>
                        <div className="wrap-input">
                            <input onChange={handleChange} required name="email" type="email" className="input" id="inputEmail" placeholder="Email Address" />
                        </div>
                        <div className="wrap-input">
                            <input onChange={handleChange} required name="password" type="password" className="input" id="inputPassword" placeholder="Password" />
                        </div>
                        <div className="forgot">
                            <small>Already a hacker? <a href="/login">Login here</a></small>
                        </div>
                        <button type="submit" className="btn btn-pri">Sign Up</button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignupForm;
