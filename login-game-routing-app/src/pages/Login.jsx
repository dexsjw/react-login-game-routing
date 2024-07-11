import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const formChangeHandler = (e) => {
        setLoginForm(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            };
        });
    }

    const loginHandler = () => {
        if (loginForm.username.length <= 0 || loginForm.password.length <= 0) {
            alert("Username and Password fields cannot be blank");
        } else {
            authCtx.loginHandler();
            navigate("/game");
        }
    }

    return(
        <div>
            <h1>Login</h1>
            {!authCtx.isLoggedIn && (
                <div style={{ display: "flex", gap: 10 }}>
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={loginForm.username}
                        onChange={formChangeHandler}
                    />
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={formChangeHandler}
                    />
                    <button type="submit" onClick={loginHandler}>
                        Login
                    </button>
                </div>
            )}
            {authCtx.isLoggedIn && (
                <>
                    <h2>Your are logged in!</h2>
                    <button onClick={authCtx.logoutHandler}>Logout</button>
                </>
            )}
        </div>
    );
}

export default Login;