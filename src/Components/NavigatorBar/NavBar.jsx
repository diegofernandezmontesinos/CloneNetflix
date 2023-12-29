import './navbar.scss';
import React, {useState} from 'react';

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
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My list</span>
        </div>
        <div className='right'>
            <search className='icon'/>
            <span>ABC</span>
            <notifications className="icon" />
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" />
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
