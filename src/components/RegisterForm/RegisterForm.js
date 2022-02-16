import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/firebaseConfig';
import { doc, setDoc, getDocs, collection, query } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from "firebase/auth";
import './registerForm.css';

const RegisterForm = () => {

    const getUsers = async () => {
        const users = query(collection(db, "users"));
            const usersData = [];
            const usersSnapshot = await getDocs(users);
            usersSnapshot.forEach((userData) => {
                usersData.push({...userData.data(), id: userData.id});
            });
            console.log(usersData)
    }

    useEffect(() => {
        getUsers()
    }, [])

    const [registeredName, setRegisteredName] = useState('');
    const [registeredSurname, setRegisteredSurname] = useState('');
    const [registeredCountry, setRegisteredCountry] = useState('Country');
    const [registeredAge, setRegisteredAge] = useState('');
    const [registeredEmail, setRegisteredEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [registeredPassword, setRegisteredPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegisteredName = (e) => {
        setRegisteredName(e.target.value);
    }

    const handleRegisteredSurname = (e) => {
        setRegisteredSurname(e.target.value);
    }

    const handleRegisteredCountry = (e) => {
        setRegisteredCountry(e.target.value);
    }

    const handleRegisteredAge = (e) => {
        setRegisteredAge(e.target.value);
    }

    const handleRegisteredEmail = (e) => {
        setRegisteredEmail(e.target.value);
    }

    const handleConfirmEmail = (e) => {
        setConfirmEmail(e.target.value);
    }

    const handleRegisteredPassword = (e) => {
        setRegisteredPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const registerInFirebase = async (email, password) => {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password)
        .then(firebaseUser => {
            return firebaseUser;
        })

        const docRef = doc(db, `users/${userInfo.user.uid}`);
        setDoc(docRef, {
            name: registeredName,
            surname: registeredSurname,
            country: registeredCountry,
            age: registeredAge,
            email: registeredEmail,
            password: registeredPassword

        });

        setRegisteredName('');
        setRegisteredSurname('');
        setRegisteredCountry('Country');
        setRegisteredAge('');
        setRegisteredEmail('');
        setConfirmEmail('');
        setRegisteredPassword('');
        setConfirmPassword('');
    }

    const handleRegister = async (e) => {
        e.preventDefault();

        if(registeredEmail === confirmEmail) {
            if(registeredPassword === confirmPassword) {
                if(confirmPassword.length > 5) {
                    if(registeredCountry !== "Country") {
                        registerInFirebase(registeredEmail, registeredPassword);
                    } else {
                        setError('You must select a country');
                        setTimeout(() => {
                            setError('')
                        }, 5000)
                    }
                } else {
                    setError('The password must be at least 6 characters');
                    setTimeout(() => {
                        setError('')
                    }, 5000)
                }
            } else {
                setError('The password must be the same');
                setTimeout(() => {
                    setError('')
                }, 5000)
            }
        } else {
            setError('The email must be the same');
            setTimeout(() => {
                setError('')
            }, 5000)
        }
    }

    return (
        <>
            <form className='register-form' onSubmit={handleRegister}>
                <div className='container-1'>
                    <div className='container-2'>
                        <input 
                            name='name'
                            onChange={handleRegisteredName}
                            type='text'
                            placeholder='Name'
                            className='register-form__input'
                            id='name'
                            value={registeredName}
                        />
                        <input 
                            name='surname'
                            onChange={handleRegisteredSurname}
                            type='text'
                            placeholder='Surname'
                            className='register-form__input'
                            id='surname'
                            value={registeredSurname}
                        />
                    </div>
                    <div className='container-2'>
                        <select 
                            name='country' 
                            onChange={handleRegisteredCountry} 
                            className='register-form__input'
                            id='country'
                            value={registeredCountry}
                        >
                                <option>Country</option>
                                <option>Argentina</option>
                                <option>Brazil</option>
                                <option>Chile</option>
                                <option>Paraguay</option>
                                <option>Spain</option>
                                <option>Uruguay</option>
                                <option>Other</option>
                        </select>
                        <input 
                            name='age'
                            onChange={handleRegisteredAge}
                            type='number'
                            min='18'
                            max='100'
                            placeholder='Age'
                            className='register-form__input'
                            id='age'
                            value={registeredAge}
                        />
                    </div>
                </div>
                <input 
                    name='email' 
                    onChange={handleRegisteredEmail}
                    type='text'
                    placeholder='Email'
                    className='register-form__input'
                    value={registeredEmail}
                />
                <input 
                    name='confirmEmail' 
                    onChange={handleConfirmEmail}
                    type='text'
                    placeholder='Confirm Email'
                    className='register-form__input'
                    value={confirmEmail}
                />
                <input 
                    name='password' 
                    onChange={handleRegisteredPassword}
                    type='password'
                    placeholder='Password'
                    className='register-form__input'
                    value={registeredPassword}
                />
                <input 
                    name='confirmPassword' 
                    onChange={handleConfirmPassword}
                    type='password'
                    placeholder='Confirm Password'
                    className='register-form__input'
                    value={confirmPassword}
                />
                <div className='register-submit'>
                    <button 
                        onClick={handleRegister} 
                        className='register-submit__button' 
                        type='submit'>
                            Register
                    </button>
                </div>
            </form>
            {error !== '' && <p className='register-error'>{error}</p>}
        </>
    )
}

export default RegisterForm;