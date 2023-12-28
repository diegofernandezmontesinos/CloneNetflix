import React from 'react';
import './navbar.scss'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                alt='netflix-logo'/>
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My list</span>
            </div>
            <div className='right'>
                <Search className='icon'/>
                <span>ABC</span>
                <Notifications className="icon" />
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" />
                <div className='profile'>
                  <ArrowDropDown className="icon" />
                  <div className='option'>
                      <span>Settings</span>
                      <span>logout</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default NavBar;