import { useState } from "react";
import { Link } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({setUser}) {
    const [showSignupForm, setShowSignupForm] = useState(false);
    return (
        <main>
            <h1>Auth Page</h1>
            <Link className={showSignupForm ? 'disabled' : ''} to="" onClick={()=>setShowSignupForm(true)}>Sign up</Link> or <Link className={showSignupForm ? '' : 'disabled'} to="" onClick={()=>setShowSignupForm(false)}>Login</Link>
            {
                showSignupForm ? 
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
        }
        </main>);
}