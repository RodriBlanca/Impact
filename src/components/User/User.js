import React, { useState, useContext } from 'react';
// React-router-dom
import { Link } from 'react-router-dom';
// Context 
import { CheckboxesContext } from '../../contexts/CheckboxesContext';
// Firebase 
// import { auth } from '../../firebase/firebaseConfig';
// import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// Images
import user from '../../images/user-e-commerce.png';
import group from '../../images/group.jpg';
// CSS
import './user.css';

const User = () => {

    const [login, setLogin] = useState([]);
    const [checkboxes, setCheckboxes] = useContext(CheckboxesContext);
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loggedUser, setLoggedUser] = useState({});

    // onAuthStateChanged(auth, (currentUser) => {
    //     setLoggedUser(currentUser);
    // })

    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setUserPassword(e.target.value);
    }

    // const loginFirebase = (email, password) => {
    //     const loginInfo = signInWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         const userId = userCredential._tokenResponse.localId;
    //         return userId;
    //         // ...
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorCode);
    //         console.log(errorMessage);
    //     });
    //     return loginInfo;
    // }

    // const handleSubmitUserLogin = (e) => {
    //     e.preventDefault();

    //     if(userEmail === '' || userPassword === '') {
    //         return ;
    //     }

    //     loginFirebase(userEmail,userPassword);

    //     setLogin([...login, {name: userEmail, password: userPassword}]);
    //     console.log(login)
    //     setUserPassword('');
    //     setUserEmail('');
    // }

    // const logOut = async () => {
    //     await signOut(auth)
    // }

    const handleUserCheckbox = () => {
        setCheckboxes({...checkboxes, user: !checkboxes.user, cart: false});
    }

    return(
        <>
            <input 
                type="checkbox"
                value="user"
                id='user'
                className='user-toggle'
                checked={checkboxes.user}
                onChange={handleUserCheckbox}
            />
            <label className='user-toggle__label' htmlFor='user'>
                {/* {
                    auth.currentUser ?
                    (
                        <div className='user-profile'>
                            <p>{loggedUser.email.charAt(0).toUpperCase()}</p>
                        </div>
                    )
                    :
                    (
                        <img src={user} alt='user' className='user-img' />
                    )
                } */}
                <img src={user} alt='user' className='user-img' />
            </label>
            <div className='user-container'>
                <div className='logIn-img'><img src={group} alt="group" className='logIn-img__img' /></div>
                {
                    // auth.currentUser ?
                    // (
                    //     <div className='logIn'>
                    //         <div className='logged'>
                    //             <p className='logged-user'>User: {loggedUser.email}</p>
                    //             <button className='logged-user__button' /* onClick={logOut} */>Log Out</button>
                    //         </div>
                    //     </div>
                    // )
                    // :
                    // (
                    //     <div className='logIn'>
                    //         <h2 className='logIn-title'>Be part of Us</h2>
                    //         <p className='logIn-text'>
                    //             Join our team to keep up to date with all the latest news and get the best benefits.
                    //         </p>
                    //         <form className='logIn-form' onSubmit={handleSubmitUserLogin}>
                    //             <input 
                    //                 type="text"
                    //                 placeholder='Email'
                    //                 className='logIn-form__user'
                    //                 onChange={handleEmail}
                    //                 value={userEmail}
                    //             />
                    //             <input 
                    //                 type="password"
                    //                 placeholder='Password'
                    //                 className='logIn-form__password'
                    //                 onChange={handlePassword}
                    //                 value={userPassword}
                    //             />
                    //             <div>
                    //                 <button
                    //                     className='logIn-form__button'
                    //                     type='submit'
                    //                 >
                    //                     Log In
                    //                 </button>
                    //             </div>
                    //             <div>
                    //                 <p className='logIn-form__text'>
                    //                     Not a member yet?
                    //                     <Link 
                    //                         to="/register"
                    //                         className='register-link'
                    //                     >
                    //                         Register Here
                    //                     </Link>
                    //                 </p>
                    //             </div>
                    //         </form>
                    //     </div>
                    // )
                }
            </div>
        </>
    );
};

export default User;
