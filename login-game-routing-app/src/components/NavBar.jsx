import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
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
            <NavLink
                to="login"
                className={({isActive}) => 
                    isActive ? styles.navItemActive : styles.navItem
                }
            >
                Login
            </NavLink>
        </nav>
    );
}

export default NavBar;