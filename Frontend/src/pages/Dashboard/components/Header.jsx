import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import profile from '../../../assets/profile.png';
import dwnArrow from '../../../assets/arrowdwn.png';

function Header({ email }) {
  const handleProfileClick = () => {
    localStorage.setItem('userEmail', email); // Save email to local storage
  };
  return (
    <div className="flex justify-between w-[1122px]">
      <h1 className="text-xl font-bold leading-6 my-auto font-roboto">Dashboard</h1>
      <div className="flex justify-between h-[50px]">
        {/* Make profile image a clickable link to ProfilePage */}
        <Link to="/profile" onClick={handleProfileClick}>
          <img src={profile} className="w-[50px] h-[50px] cursor-pointer" alt="Profile" />
        </Link>
        <img src={dwnArrow} className="w-5 h-5 my-auto" alt="Arrow Down" />
      </div>
    </div>
  );
}

export default Header;
