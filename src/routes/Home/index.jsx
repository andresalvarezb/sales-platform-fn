import React from 'react';
import Button from '../../components/Button';
import './home.css';

function Home() {
    return (
        <main className='Home'>
            <div className='Home-img'></div>
            <div className="Home-form">
                <form action="" className='Login'>
                    <h3 className='Login-h3'>Login</h3>
                    <label className='Login-label u-my-2'>
                        <p className='u-mb-0'>User</p>
                        <input className='Login-input' type="email" name='email' required/>
                        <span><a href='/'>¿forget your email?</a></span>
                    </label>
                    <label className='Login-label u-my-2'>
                        <p className='u-mb-0'>Password</p>
                        <input className='Login-input' type="password" name='password' required/>
                        <span><a href='/'>¿forget your password?</a></span>
                    </label>
                    <div className="Login-btn u-my-2">
                        <Button type='submit' primary>Log in</Button>
                    </div>
                    <div className="Login-information u-my-2">
                        <p className='u-mb-0'>¿You don't have an account? <a href='/'>Create ir here!</a></p>
                        <p className='u-mb-0'>By clicking enter, you are accepting our <a href='/'>Terms and conditions of service and you are accepting our Data Privacy Policy</a></p>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Home
