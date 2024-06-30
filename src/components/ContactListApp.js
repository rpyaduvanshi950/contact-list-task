import React from 'react'
import './ContactListApp.css';
import HorizontalNavbar from './HorizontalNavbar/HorizontalNavbar';
import NavbarAndContactList from './NavbarAndContactList/NavbarAndContactList';

const ContactListApp = () => {
    return (
        <div className='contact-list-app'>
            <div>
            <HorizontalNavbar />
            </div>
            <div>
            <NavbarAndContactList />
            </div>
        </div>
    )
}

export default ContactListApp