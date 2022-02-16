import React from 'react';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import '../index.css';

const Register = () => {
    return (
        <div className='register'>
            <h1 className='register-title'>Register</h1>
            <RegisterForm />
        </div>
    )
}

export default Register;