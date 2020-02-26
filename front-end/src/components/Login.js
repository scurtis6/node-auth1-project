import React from 'react';
import axios from 'axios';

const Login = () => {
    return(
        <div>
            <form>
                <label htmlFor='username' />
                <input
                type='text'
                name='username'
                />
                <label htmlFor='password' />
                <input 
                type='password'
                name='password'/>
                <button>Click To Login In!</button>
            </form>
        </div>
    )
};

export default Login;