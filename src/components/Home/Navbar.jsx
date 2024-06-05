import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Navbar = () => {
  const [user, setUser] = useState('');
  const auth = getAuth(app);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => setUser(''))
      .catch(error => {
      console.log(error)
    })
  }
    return (
        <div className="navbar bg-base-100 h-full">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">DelightInk</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li>{user?<button onClick={handleSignOut}>Logout</button>:(<Link to='/Login'>Login</Link>)}</li>
            </ul>
          </div>
        </div>
    );
};

export default Navbar;