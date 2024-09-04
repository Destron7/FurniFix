import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <ul style={styles.navList}>
                <li style={styles.navItem}>
                    <Link to="/contactus" style={styles.navLink}>Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: '#333',
        padding: '10px'
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
        padding: 0
    },
    navItem: {
        margin: '0 10px'
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none'
    }
};

export default Navbar;