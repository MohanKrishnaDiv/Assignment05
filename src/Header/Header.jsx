import React from 'react';
import samsung from '../assets/images/samsung.png';

import "./Header.scss"

const Header = () => {
    const headItems = ['Mobile','TV&AV','Home Appliances','Laptop Monitors','Displays','Accessories','SmartThigs','Offers'];
  return (
    <div className='head-main'>
        <div className='logo'><img src={samsung} alt="logo" /></div>
        <div className='head-menu'>
            <div className='head-left-menu'>
                {headItems.map((items,i) =><li className='left-menu-items' key={i}> {items} </li>)}           
            </div>
            <div className='head-right-menu'>
                <li>Support</li>
                <li>For Bussiness</li>
            </div>
        </div>
        <div className='head-options'>
            <img src={require('../assets/images/search.PNG')} alt="search" />
            <img src={require('../assets/images/shopping.PNG')} alt="shopping" />
            <img src={require('../assets/images/user.PNG')} alt="user" />
        </div>
    </div>
  )
}

export default Header

