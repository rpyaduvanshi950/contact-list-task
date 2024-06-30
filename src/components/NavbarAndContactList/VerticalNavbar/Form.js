import React, { useEffect, useState } from 'react'
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Ui/Button.js';
import { contactListActions } from '../../../store/contact-slice';
import { addContact } from '../../../store/contact-actions';

const Form = () => {

  const dispatch = useDispatch();
  const existingContactKey = useSelector(state => state.contact.key);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    tel: "",
  });

  useEffect(() => {
    const fetchExistingContact = async () => {
      const res = await fetch(`https://contact-list-app-c96f0-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactKey}.json`);
      const existingContact = await res.json();
      setUserData({
        name: existingContact?.name || "",
        email: existingContact?.email || "",
        tel: existingContact?.tel || ""
      });
    }

    fetchExistingContact();
  }, [existingContactKey]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (existingContactKey) {
      dispatch(contactListActions.updateContact({
        key: existingContactKey,
        name: userData.name,
        email: userData.email,
        tel: userData.tel
      }));
    }
    else {
      dispatch(addContact(userData));
    }
    setUserData({
      name: "",
      email: "",
      tel: "",
    });
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUserData((preValue) => {
      return {
        ...preValue,
        [name]: value
      }
    });
  }

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='add-new-img'>
        <img src={addnewImage}></img>
      </div>
      <div className='input-text'>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={userData.name}
          onChange={inputHandler} 
          required 
          pattern='[A-Za-z]+'/>
        <input
          type='text'
          placeholder='email'
          name='email'
          value={userData.email}
          onChange={inputHandler}
          required />
      </div>
      <div className='input-tel'>
        <input
          type='text'
          placeholder='7854809325'
          name='tel'
          value={userData.tel}
          onChange={inputHandler}
          required 
          maxLength={10}
          minLength={10}/>
      </div>
      <Button name='Add' />
    </form>
  )
}

export default Form