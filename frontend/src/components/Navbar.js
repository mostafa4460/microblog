import {NavLink as RouterLink} from 'react-router-dom';
import {Typography, Link} from '@material-ui/core';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <Typography variant="h2" component="h1" color="primary">
                Microblog
            </Typography>
            <Typography variant="h5" component="h5">
                Blog about anything you want!
            </Typography>
            <Link exact variant="h6" component={RouterLink} to="/">
                Blog
            </Link>
            <Link exact variant="h6" component={RouterLink} to="/new">
                Add a new post
            </Link>
        </div>
    );
};

export default Navbar;