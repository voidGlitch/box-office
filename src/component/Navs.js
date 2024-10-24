import React, { memo } from 'react';
import { useLocation } from 'react-router';
import { LinkStyled, NavList } from './Navs.styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];
const Navs = () => {
  // tracks the current location
  const location = useLocation();
  return (
    <div>
      <NavList>
        {LINKS.map(items => (
          <li key={items.to}>
            <LinkStyled
              to={items.to}
              className={items.to === location.pathname ? 'active' : ''}
            >
              {items.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default memo(Navs);
