import React from 'react'
import FavContactData from './FavContactData';
import { useState, useEffect } from 'react';
function FavContactList() {
    const [favContacts , setfavContacts] = useState([]);

    useEffect(() => {
      const fetchContacts = async () => {
        const res = await fetch("https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json");
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
        setfavContacts(contactsData);
      }
      fetchContacts();
  
    },[favContacts]);
  
    return (
      <div className='contact-list fav-contact-list'>
        {
          favContacts.length>0 ? (
  
            <table>
          <thead>
            <tr>
              <th><p>Profile</p></th>
              <th><p>Name</p></th>
              <th><p>email</p></th>
              <th><p>Mobile</p></th>
              
            </tr>
          </thead>
         <FavContactData favContacts={favContacts}/>
        </table>
        ) :(
          <p style={{textAlign:'center'}}>No contacts found</p>
        )
      }
      </div>
    )
  }


export default FavContactList