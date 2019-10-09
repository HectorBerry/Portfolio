import React from 'react';
import './css/Menu.css';

function Menu() {
  return (
    <header>
      <nav class="nav nav-pills flex-column flex-sm-row">
        <a class="flex-sm-fill text-sm-center nav-link active" href="#">Hector Berry</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#aboutme">About me</a>
        <a class="flex-sm-fill text-sm-center nav-link" href="#projects">Projects</a>
      </nav>
    </header>
  );
}

export default Menu;
