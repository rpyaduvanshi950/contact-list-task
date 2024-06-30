import React, { useEffect, useState } from 'react';
import ContactData from './ContactData';
import './ContactList.css';

const ContactList = () => {

  const [contacts , setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await fetch("https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json");
      const data = await res.json();
      const contactsData = [];
      for(const key in data) {
        contactsData.push({
          key: key,
          name: data[key].name,
          email: data[key].email,
          tel: data[key].tel
        }); 
      }
      setContacts(contactsData);
    }
    fetchContacts();

  },[contacts]);

  return (
    <div className='contact-list'>
      {
        contacts.length>0 ? (

          <table>
        <thead>
          <tr>
            <th className="profile-column"><p>Profile</p></th>
              <th className="name-column"><p>Name</p></th>
              <th className="email-column"><p>Email</p></th>
              <th className="mobile-column"><p>Mobile</p></th>
              <th className="actions-column"><p>Actions</p></th>
          </tr>
        </thead>
       <ContactData contacts={contacts}/>
      </table>
      ) :(
        <p style={{textAlign:'center'}}>No contacts found</p>
      )
    }
    </div>
  )
}

export default ContactList