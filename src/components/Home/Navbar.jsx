import React, { useState } from 'react';
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
        <div class="navbar bg-base-100 h-full">
          <div class="flex-1">
            <a class="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/dashboard'>Dashboard</Link></li>
              <li>{user?<button onClick={handleSignOut}>Logout</button>:(<Link to='/Login'>Login</Link>)}</li>
            </ul>
          </div>
        </div>
    );
};

export default Navbar;