import React from 'react';
import { A } from 'hookrouter';
import '../App.css';
import withBorder from './with-border.jpg';

function Header() {
  return (
    <div className="header">
      <A href="/"><img alt="logo" src={withBorder} width="260"/></A>
    </div>
  );
}

export default Header;