import Grassfooter from "../components/Grassfooter";

export default function Register() {
    return (
        <div className='register-box'>
            <div className="register-header-box">
                <h1 className="register-header-text">Let's get started.</h1>
            </div>
            <form className="register-form-box">
                <label className="reg-email-lab label">Enter your email address</label>
                <input className="reg-email-inp input" type="email" placeholder="myemail@email.com"></input>
                <label className="username-lab label">Pick a username</label>
                <input className="username-inp input" type="text" maxlength="12"></input>
                <label className="password-lab label">choose a password</label>
                <input className ="password-inp input" type="password"></input>
                <label className="reenter-pass-lab label">confirm your password</label>
                <input className="reenter-pass-inp input" type="password"></input>
                <button className="register-btn btn">Register</button>
            </form>
            <Grassfooter />
        </div>
    )
}