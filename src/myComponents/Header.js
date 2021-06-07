import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <div>
     
     <nav className="k"> 
     <a class="navbar-brand" href="www.google.com">{props.title}</a>
     <a className="sample "href="www.google.com" >About</a>
     <a className="sample "href="www.google.com" >Contact Us</a>
     <a className="sample "href="www.google.com"  >Products</a>
     <a className="active " href="www.google.com">Home</a>
      </nav>
    </div>
  )

  }