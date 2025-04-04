import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #4a4a4a;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #4a4a4a;
  font-weight: 500;
  padding: 10px 0;
  transition: color 0.3s ease;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #4285f4;
    transition: width 0.3s ease;
  }
  
  &:hover, &.active {
    color: #4285f4;
    
    &:after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #4a4a4a;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  transition: all 0.3s ease;
  z-index: 999;
`;

const MobileNavLink = styled(Link)`
  color: #4a4a4a;
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
  font-weight: 500;
  
  &:last-child {
    border-bottom: none;
  }
  
  &.active {
    color: #4285f4;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <NavContainer>
      <NavInner>
        <Logo>
          <Link to="/">Vibeception</Link>
        </Logo>
        
        <NavLinks>
          <NavLink to="/" className={isActive('/')}>Home</NavLink>
          <NavLink to="/products" className={isActive('/products')}>Products</NavLink>
          <NavLink to="/about" className={isActive('/about')}>About</NavLink>
          <NavLink to="/contact" className={isActive('/contact')}>Contact</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={toggleMenu}>
          {menuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </NavInner>
      
      <MobileMenu isOpen={menuOpen}>
        <MobileNavLink to="/" className={isActive('/')} onClick={closeMenu}>Home</MobileNavLink>
        <MobileNavLink to="/products" className={isActive('/products')} onClick={closeMenu}>Products</MobileNavLink>
        <MobileNavLink to="/about" className={isActive('/about')} onClick={closeMenu}>About</MobileNavLink>
        <MobileNavLink to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</MobileNavLink>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar;