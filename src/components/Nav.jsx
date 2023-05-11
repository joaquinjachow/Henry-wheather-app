import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <nav className="flex justify-start bg-gray-800">
    <div className='flex'>
      <Link to='/'>
        <span className="text-white">
          <img src={Logo} width="30" height="30" className="flex" alt="" />
          Henry - Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span>About</span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </div>
    </nav>
  );
};

export default Nav;
