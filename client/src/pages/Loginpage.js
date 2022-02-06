import { useState } from 'react'
import Grassfooter from '../components/Grassfooter'

export default function Loginpage() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const handleInputUpdate = function (e) {
        console.log(e.target.name)
        setCredentials(
            {
                ...credentials, [e.target.name]: e.target.value
            }
        )

        console.log(credentials)
    }

    const togglePasswordVisibility = function () {
        const password = document.querySelector('.login-password-inp')
        const eyeIcon = document.querySelector('.bi-eye-slash')

        console.log(eyeIcon)

        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type)

        eyeIcon.classList.toggle('bi-eye')
    }

    return (
        <div className="home-box">
            <div className="home-header-box">
                <h1 className="home-header-text1">Hello,</h1>
                <h2 className="home-header-text2">Clean.</h2>
            </div>
            <div className="login-form-box">
                <form className="login-form">
                    <label className="login-username-lab label">Username</label>
                    <input type="text" className="login-username-inp input" onChange={handleInputUpdate} placeholder="Username" name="username"></input>
                    <label type="text" className="login-password label">Password</label>
                    <div className='pass-box'>
                    <input type="password" className="login-password-inp input" onChange={handleInputUpdate} placeholder="password" name="password"></input>
                    <i className="bi bi-eye-slash" id="togglePassword" onClick={togglePasswordVisibility}></i>
                    </div>
                    <button className="login-btn btn" type="submit">Login</button>
                </form>
            </div>
            <Grassfooter />
        </div>
    )
}