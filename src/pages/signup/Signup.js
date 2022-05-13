import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './Signup.css'
import { useAuth } from 'context/authContext';
import { authenticate } from 'utils/api/authenticate';

function Signup() {
    const { loginUser } = useAuth();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const updateUserName = event => {
        setUserName(event.target.value)
    }
    const updatePassword = event => {
        setPassword(event.target.value)
    }
    const updateEmail = event => {
        setEmail(event.target.value)
    }

    const registerUser = async (e) => {
        e.preventDefault()
        if (userName !== '' && password !== '' && email !== '') {
            const userInfo = {
                email,
                password,
                firstName: userName
            }
            try {
                const response = await authenticate(`${process.env.REACT_APP_API_HOST_URL}/auth/signup`, userInfo)
                if (response) {
                    localStorage.setItem("token", response.encodedToken)
                    loginUser()
                    const redirectTo = location?.state?.from?.pathname ?? location?.state?.from ?? '/product';
                    navigate(redirectTo, { replace: true })
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <main className="signUp-page">
            <div className="form-container">
                <h2 className="form-heading">Sign Up</h2>
                <form className="form" action="/">
                    <div className="mb-1 input-container">
                        <label for="name">Enter name </label>
                        <input required onChange={updateUserName} className="input" id="name" name="name" type="text" placeholder="e.g., Oliver" />
                    </div>
                    <div className="mb-1 input-container">
                        <label for="email">Enter email </label>
                        <input required onChange={updateEmail} className="input" id="email" name="email" type="text" placeholder="e.g., oliver@gmail.com" />
                    </div>
                    <div className="mb-1 input-container">
                        <label for="password">Enter password </label>
                        <input required onChange={updatePassword} className="input" id="password" name="password" type="password" placeholder="e.g., Oliver123" />
                    </div>
                    <div className="form-extrafeild">
                        <div className="mb-1 checkbox input-container ">
                            <input id="checkbox-input" name="checkbox-input" type="checkbox" /><label
                                for="checkbox-input">Remember
                                me</label>
                        </div>
                        <div>Forgot password?</div>
                    </div>
                    <button type="submit" onClick={registerUser} className="btn btn-primary-contained btn-extra">login</button>
                </form>
                <Link state={{ from: location?.state?.from?.pathname }} replace to="/login" className="form-link">Already have an account? Login here <i
                    className='fas fa-angle-right'></i></Link>
            </div>
        </main>
    )
}

export { Signup }