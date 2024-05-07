import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger icon
import { IoClose } from 'react-icons/io5'; // Close icon

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem('first_name'));
  const [profile, setProfile] = useState(localStorage.getItem('profile_pic'));
  const [email, setEmail] = useState(localStorage.getItem('email'));

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.header')) {
        closeMenu();
      }
    };

    if (isOpen) {
      window.addEventListener('click', handleOutsideClick);
    }

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  const handleMenuOptionClick = () => {
    closeMenu();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    closeMenu();
    if (email) {
      try {
        const res = await axios.post('https://chronic-care-gpt.onrender.com/api/v1/auth/changePassword/', {'email': email});
        if (res.status === 200) {
          const response = res.data;
          const uidb64 = response['uidb64'];
          const token = response['token'];
          navigate(`/password-reset-confirm/${uidb64}/${token}`);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // Clear localStorage when the button is clicked
    setUsername('');
    setProfile('');
    setEmail('');
  };

  return (
    <div className='flex justify-center'>
      <div className='header'>
        <div className='logo-section'>
          <img src='https://img.icons8.com/?size=96&id=4GhGzHg3nZeG&format=png' alt="Logo"></img>
          <Link to='/'>ChronicCare GPT</Link>
        </div>
        <div className='mob-opt'>
          <div className='opt-screen' onClick={toggleMenu}></div>
          {isOpen ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        <nav className={isOpen ? 'show' : 'menu'}>
          <ul className='navigation'>
            <li><Link to='/' onClick={toggleMenu}>Home</Link></li>
            <li><Link to='https://www.cdc.gov/niosh/topics/spirometry/refcalculator.html' onClick={toggleMenu}>Calculation of FEV1</Link></li>
            <li><Link to='chatbot/' onClick={toggleMenu}>Chat</Link></li>
            <li><Link to='diagnose/' onClick={toggleMenu}>Diagnose</Link></li>
          </ul>
          <div className='nav2'>
            {!username ? (
              <Link to="/login" className="signin" onClick={toggleMenu}>
                Sign in
              </Link>
            ) : (
              <>
                <div className='profile-cont'>
                  <div className="profile">
                    <img src={profile} alt="Profile" className="profile-img" onClick={toggleMenu} />
                  </div>
                  <Link to="/" className="signin" onClick={handleLogout}>Logout</Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
      <div className='body-content'>
        <Outlet />
      </div>
    </div>
  )
};

export default Header;
