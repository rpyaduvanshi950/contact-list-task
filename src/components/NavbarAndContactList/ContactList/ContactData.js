import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactListActions } from '../../../store/contact-slice';
import { deleteContact } from '../../../store/contact-actions';

const ContactData = (props) => {
    const [toggle,setToggle]= useState(false);
    const dispatch = useDispatch();

    const deleteContactHandler = (key) => {
        dispatch(deleteContact(key));
    }
    const updateContactHandler = (key) => {
        dispatch(contactListActions.setExistingContactKey(key));
    }
    
    return (
        <tbody>
            {
                props.contacts.map((contact) => {
                    return (
                        <tr key={contact.key}>
                            <td data-label="Profile">
                                <div className='profile-img-box'>
                                <i class="fa-regular fa-user"></i>
                                </div>
                            </td>
                            <td data-label="Name"><h2>{contact.name}</h2></td>
                            <td data-label="Email"><h2>{contact.email}</h2></td>
                            <td data-label="Mobile"><h2>{contact.tel}</h2></td>
                            <td data-label="Actions">
                                <div>
                                    <i className={`fa-solid fa-pen `}
                                        onClick={() => { updateContactHandler(contact.key) }}></i>
                                    <i className='fa-solid fa-trash'
                                        onClick={() => { deleteContactHandler(contact.key) }}></i>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default ContactData