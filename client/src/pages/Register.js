import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { REGISTER } from '../utils/mutation';
import Grassfooter from "../components/Grassfooter";
import auth from '../utils/auth';
import { useNavigate } from 'react-router';

export default function Register() {
    let navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email:'',
        username: '',
        password: '',
        confirmed: ''
    })

    const [errMessage, setErrMessage] = useState('')

    const [register, {data, loading, error}] = useMutation(REGISTER)

    const handleInputUpdate = function (e) {
       return setCredentials(
            {
                ...credentials, [e.target.name]: e.target.value
            }
        )
    }

    const passChecker = function (e) {
        e.preventDefault()

        if (credentials.password !== credentials.confirmed) {
            return setErrMessage("Passwords don't match. Please try again.")
        }

        else (
            handleRegister()
        )

    }

    const handleRegister = async () => {

        if (credentials.email && credentials.username && credentials.password) {
            const { email, username, password } = credentials
            const { data, error, loading } = await register(
                {
                    variables: {
                        email,
                        username,
                        password
                    }
                }
            ).catch((err) => {
                console.error(err)
                setErrMessage('Registration failed, please try again.')
            })

            if(loading) {
                console.log('loading')
            }

            if(data) {
                auth.login(data.register.token)
                return navigate('/areas')
            }
        }

        setErrMessage('')
    }

    return (
        <div className='register-box'>
            <div className="register-header-box">
                <h1 className="register-header-text">Let's get started.</h1>
            </div>
            <div className="form-error-box">
                <form className="register-form-box">
                    {/* E-mail */}
                    <label className="reg-email-lab label">Enter your email address</label>
                    <input className="reg-email-inp input" onChange={handleInputUpdate} name="email" type="email" placeholder="myemail@email.com"></input>

                    {/* Username */}
                    <label className="username-lab label">Pick a username</label>
                    <input className="username-inp input" onChange={handleInputUpdate} name="username" type="text" maxLength="12"></input>

                    {/* password */}
                    <label className="password-lab label">choose a password</label>
                    <input className ="password-inp input" onChange={handleInputUpdate} name="password" type="password"></input>
                    <label className="reenter-pass-lab label">confirm your password</label>

                    {/*check password match */}
                    <input className="reenter-pass-inp input" onChange={handleInputUpdate} name="confirmed" type="password"></input>
                    <button onClick={passChecker} className="register-btn btn">Register</button>
                </form>
                <div className="error-box">
                    <h2 className="error-text">{errMessage}</h2>
                </div>
            </div>

            <Grassfooter />
        </div>
    )
}