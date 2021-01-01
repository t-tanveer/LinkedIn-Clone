import "./Login.css"
import React, { useState } from 'react'
import { auth } from "./firebase";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const register = () => {
        if (!name) {
            // return alert("hello!");
        }
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic
                })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic,
                            })
                        );
                    });
            }).catch(error => alert(error));
    };


    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            }))
        }).catch((error) => alert(error));
     };

    return (
        <div className="login">
            <h1> Hello !</h1>

            <img src="https://cdn.worldvectorlogo.com/logos/linkedin-logo-2013.svg" alt="" />

            <form action="">

                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name (required to sign up)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} type="text" placeholder="Profile Pic URL (optional)" />
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="password" />
                <button type="submit" onClick={loginToApp}> Sign in </button>
            </form>
            <p>Not a member?{" "}
                <span className="login__register" onClick={register}> Register Now!</span>
            </p>
        </div>
    )
}

export default Login
