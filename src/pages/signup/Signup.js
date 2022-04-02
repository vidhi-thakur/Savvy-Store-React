import React from 'react'

// css
import './Signup.css'

function Signup() {
    return (
        <main className="signUp-page">
            <div className="form-container">
                <h2 className="form-heading">Sign Up</h2>
                <form className="form" action="/">
                    <div className="mb-1 input-container">
                        <label for="name">Enter name </label>
                        <input required className="input" id="name" name="name" type="text" placeholder="e.g., Oliver" />
                    </div>
                    <div className="mb-1 input-container">
                        <label for="email">Enter email </label>
                        <input required className="input" id="email" name="email" type="text" placeholder="e.g., oliver@gmail.com" />
                    </div>
                    <div className="mb-1 input-container">
                        <label for="password">Enter password </label>
                        <input required className="input" id="password" name="password" type="password" placeholder="e.g., Oliver123" />
                    </div>
                    <div className="form-extrafeild">
                        <div className="mb-1 checkbox input-container ">
                            <input id="checkbox-input" name="checkbox-input" type="checkbox" /><label
                                for="checkbox-input">Remember
                                me</label>
                        </div>
                        <div>Forgot password?</div>
                    </div>
                    <button type="submit" className="btn btn-primary-contained btn-extra">login</button>
                </form>
                <a href="./login.html" className="form-link">Already have an account? Login here <i
                    className='fas fa-angle-right'></i></a>
            </div>
        </main>
    )
}

export default Signup