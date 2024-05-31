import React from 'react';

const Header = () => {
  return (
    <header id="header" className='display-flex flex-between'>
      <div id='logo' className='display-flex'>
        <div id='logo-slay' className='font-pop'>SLAY</div>
        <div id='logo-week' className='font-chunky'>the Week</div>
      </div>
      <div className='pointer'>
        Account
        &#9660;
      </div>
    </header>
  );
};

export default Header;
