import React from 'react';

import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
       <nav className='nav'>
           <a href='/' className='logo'> MIKE MUNDIA</a>
           <ul>
               <li>
                   <a href='/'>ABOUT</a>
               </li>
               <li>
                   <a href='/'>EXPIRENCE</a>
               </li>
               <li>
                   <a href='/'>SKILLS</a>
               </li>
               <li>
                   <a href='/'>PROJECTS</a>
               </li>
               <li>
                   <a href='/'>THEATRE</a>
               </li>
               <li>
                   <a href='/'>CONTACT</a>
               </li>
               <li>
                   <a href='/'>RESUME</a>
               </li>
           </ul>
       </nav>
    </div>
  )
}

export default Navbar;
