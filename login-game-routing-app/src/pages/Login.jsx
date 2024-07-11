import { useContext, useState } from "react";
import { AuthContext } from "../store/auth-context";

function Login() {
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
                    <button type="submit" onClick={authCtx.loginHandler}>
                        Login
                    </button>
                </div>
            )}
        </div>
    );
}

export default Login;