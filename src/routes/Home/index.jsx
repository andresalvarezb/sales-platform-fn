import React from 'react';
import Button from '../../components/Button';
import './home.css';

function Home() {
    return (
        <main className='container'>
            <figure className='container__img'>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </figure>
            <div className="container__form">
                <form action="">
                    <h3>Login</h3>
                    <label>
                        <p>User</p>
                        <input type="email" name='email' required/>
                        <span><a href='/'>¿forget your email?</a></span>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name='password' required/>
                        <span><a href='/'>¿forget your password?</a></span>
                    </label>
                    <div className="container-btn">
                        <Button type='submit' primary>Log in</Button>
                    </div>
                    <div className="extra-information">
                        <p>¿You don't have an account? <a href='/'>Create ir here!</a></p>
                        <p>By clicking enter, you are accepting our <a href='/'>Terms and conditions of service and you are accepting our Data Privacy Policy</a></p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Home
