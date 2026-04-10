import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBtn = styled.li`
  background: linear-gradient(
    135deg,
    rgba(212,175,55,0.95),
    rgba(180,140,30,0.9)
  );
  color: black;
  width: 15rem;
  height: 2.8rem;

  border: none;
  outline: none;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 5px 20px rgba(212,175,55,0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-50%) scale(1.05);
  }

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`;

const MenuItems = styled(motion.ul)`
  position: relative;
  height: ${(props) => props.theme.navHeight};

  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(12px);

  border-bottom: 1px solid rgba(212,175,55,0.2);

  color: ${(props) => props.theme.text};

  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;

const Item = styled(motion.li)`
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: 500;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 40em) {
    padding: 0.5rem 0;
  }
`;

const Navbar = () => {
  const [click, setClick] = useState(false);
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);

    scroll.scrollTo(elem, {
      offset: '-100',
      duration: '2000',
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <NavContainer
      click={+click}
      animate={{ y: click ? "0%" : "-100%" }}
      initial={{ y: "-100%" }}
      transition={{ duration: 0.5}}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>
          <span>MENU</span>
        </MenuBtn>

        <Item
          whileHover={{ scale: 1.1, y: -5, color: '#d4af37' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll('#home')}
        >
          <Link to="/">Home</Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5, color: '#d4af37' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll('.about')}
        >
          <Link to="/">About</Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5, color: '#d4af37' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll('#shop')}
        >
          <Link to="/">Our Expertise</Link>
        </Item>

        <Item
          whileHover={{ scale: 1.1, y: -5, color: '#d4af37' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScroll('.new-arrival')}
        >
          <Link to="/">Our gallery</Link>
        </Item>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;