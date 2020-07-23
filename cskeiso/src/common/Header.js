import React from 'react';
import { A } from 'hookrouter';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <A href="/"><img src="images/with-border.jpg" width="260"/></A>
    </div>
  );
}

export default Header;