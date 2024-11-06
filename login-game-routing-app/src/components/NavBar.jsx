import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import { AuthContext } from '../store/auth-context';
import { useContext } from 'react';

function NavBar() {
    const {isLoggedIn, logoutHandler} = useContext(AuthContext);

    return (
        <nav className={styles.navContainer}>
            <NavLink
                to="/"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                About
            </NavLink>
            <NavLink
                to="contact"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                Contact
            </NavLink>
            <NavLink
                to="game"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                Game
            </NavLink>
            {/* Dex */}
            <NavLink
                to="login"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                {!isLoggedIn && "Login"}
                {isLoggedIn && "Logout"}
            </NavLink>
            {/* Daniel */}
            {/* {!isLoggedIn && (
                <NavLink
                    to="login"
                    className={({ isActive }) =>
                        isActive ? styles.navItemActive : styles.navItem
                    }
                >
                Login
                </NavLink>
            )}
            {isLoggedIn && (
                <span className={styles.navItem} onClick={logoutHandler}>
                    Log Out
                </span>
            )} */}
        </nav>
    );
}

export default NavBar;