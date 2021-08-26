import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'home' },
  { to: '/starred', text: 'Starred' },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(items => (
          <li key={items.to}>
            <Link to={items.to}>{items.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
