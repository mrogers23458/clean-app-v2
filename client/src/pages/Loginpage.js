import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../utils/mutation'
import auth from '../utils/auth'
import Grassfooter from '../components/Grassfooter'
import { useNavigate } from 'react-router'

export default function Loginpage() {

    let navigate = useNavigate()

    // state function for setting state current to user input
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [errMessage, setErrMessage] = useState('')

    //login ApolloClient mutation
    const [loginUser, {data, loading, error}] = useMutation(LOGIN)

    const handleInputUpdate = function (e) {
        console.log(e.target.name)
       return setCredentials(
            {
                ...credentials, [e.target.name]: e.target.value
            }
        )
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        console.log('login form used')
        console.log(credentials)
        if (credentials.username || credentials.password === ''){
            setErrMessage('Please enter username and password')
        }

        if (credentials.username && credentials.password ){
            const { username, password } = credentials
            console.log(credentials)
            const {data, error, loading } = await loginUser(
                {
                    variables: {
                        username,
                        password
                    }
                }
            ).catch((err) => {
                console.log(err)
                setErrMessage('Incorrect Username or Password')
            })

            if(data) {
                console.log(data)
                console.log('data check hit')
                await auth.login(data.login.token)
                return navigate('/areas')
            }
        }
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
                        <div className='eye-error-box'>
                            <i className="bi bi-eye-slash" id="togglePassword" onClick={togglePasswordVisibility}></i>
                        </div>
                    </div>
                    <button onClick={handleLogin} className="login-btn btn" type="submit">Login</button>
                    <h3 className="error-text">Need an account? <a className="register-link input" href="/register">Register</a></h3>
                    <h4 className="error-text">{errMessage}</h4>
                </form>
            </div>
            <Grassfooter />
        </div>
    )
}