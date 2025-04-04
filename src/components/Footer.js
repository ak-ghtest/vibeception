import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterHeading = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
`;

const FooterLink = styled(Link)`
  color: #bdc3c7;
  margin-bottom: 10px;
  font-size: 14px;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
`;

const FooterText = styled.p`
  color: #bdc3c7;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #34495e;
  font-size: 14px;
  color: #bdc3c7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterHeading>Vibeception</FooterHeading>
          <FooterText>
            Your premier destination for quality products and exceptional shopping experience.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Shop</FooterHeading>
          <FooterLink to="/products">All Products</FooterLink>
          <FooterLink to="/products">New Arrivals</FooterLink>
          <FooterLink to="/products">Featured Items</FooterLink>
          <FooterLink to="/products">Sale</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Information</FooterHeading>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/">Privacy Policy</FooterLink>
          <FooterLink to="/">Terms & Conditions</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterHeading>Contact</FooterHeading>
          <FooterText>123 E-Commerce Street</FooterText>
          <FooterText>Shopping District, SP 12345</FooterText>
          <FooterText>Phone: (123) 456-7890</FooterText>
          <FooterText>Email: info@vibeception.com</FooterText>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} Vibeception. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;