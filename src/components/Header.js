//renders the app header and accepts a title prop
import React from "react";
import Search from './Search';

const Header = (props) => {
  return (
    <header className = "App-header">
        <h2>{props.text}</h2>
        <Search />
    </header>
  );
};

export default Header;
