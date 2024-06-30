import React from 'react'
import ContactList from './ContactList/ContactList';
import './NavbarAndContactList.css';
import VerticalNavbar from './VerticalNavbar/VerticalNavbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const NavbarAndContactList = () => {
  return (
    <div className='navbar-and-list'>
      <div className='navbar-and-list'>
      <div className='vertical-navbar-section'>
      <VerticalNavbar />
      </div>
      <div className="contact-section">
      <ContactList />
      </div>
    </div>
    </div>
  )
}

export default NavbarAndContactList