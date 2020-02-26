import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [credentials, Setcredentials] = useState()
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