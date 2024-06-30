import React from 'react'
import Button from '../Ui/Button';
import './HorizontalNavbar.css';

const HorizontalNavbar = () => {
  return (
    <div className='horizontal-nav'>
      <div className='profile'>
        <div className='profile-img-box'>
          <i className='fa-solid fa-user'></i>
        </div>
        <div className="name">
        <h2> <strong> User</strong></h2>
        </div>
      </div>
      <form className='search-box'>
        <input type='text' placeholder='search bar' />
        <Button name='Search' />
      </form>
    </div>
  )
}

export default HorizontalNavbar 