import React, {useState} from 'react';
import './navbar.scss';

function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className= {isScrolled ? "navbar scrolled"  : 'navbar'} >
    <div className='container'>
        <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt='netflix-logo'/>
            <span><a href="/">Homepage </a></span>
            <span><a href="/Error">Series </a></span>
            <span><a href="/Error">Movies </a></span>
            <span><a href="/Error">New and Popular </a></span>
            <span><a href="/Error">My list </a></span>
        </div>
        <div className='right'>
            <span>Text</span>
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" />
            <li className='buttons'> Sign In </li>
            <div className='profile'>
               {/* <arrowDropDown className="icon" />  */}
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
