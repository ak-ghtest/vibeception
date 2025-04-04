import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  position: relative;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 700px;
  padding: 0 20px;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeroButton = styled(Link)`
  background-color: white;
  color: #6c5ce7;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #6c5ce7;
  }
`;

const FeaturedSection = styled.section`
  margin-bottom: 60px;
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 16px;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #6c5ce7;
  font-weight: 700;
`;

const BrowseMoreButton = styled(Link)`
  display: block;
  margin: 40px auto 0;
  background-color: transparent;
  border: 2px solid #6c5ce7;
  color: #6c5ce7;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
  width: fit-content;
  
  &:hover {
    background-color: #6c5ce7;
    color: white;
  }
`;

const Home = () => {
  return (
    <div>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to Vibeception</HeroTitle>
          <HeroSubtitle>
            Discover our premium selection of products designed to elevate your lifestyle.
            Shop the latest trends with confidence.
          </HeroSubtitle>
          <HeroButton to="/products">Shop Now</HeroButton>
        </HeroContent>
      </HeroSection>
      
      <FeaturedSection>
        <SectionTitle>Featured Products</SectionTitle>
        <FeaturedGrid>
          <ProductCard>
            <ProductImage>Product Image Placeholder</ProductImage>
            <ProductInfo>
              <ProductName>Premium Product 1</ProductName>
              <ProductPrice>$99.99</ProductPrice>
            </ProductInfo>
          </ProductCard>
          
          <ProductCard>
            <ProductImage>Product Image Placeholder</ProductImage>
            <ProductInfo>
              <ProductName>Premium Product 2</ProductName>
              <ProductPrice>$129.99</ProductPrice>
            </ProductInfo>
          </ProductCard>
          
          <ProductCard>
            <ProductImage>Product Image Placeholder</ProductImage>
            <ProductInfo>
              <ProductName>Premium Product 3</ProductName>
              <ProductPrice>$79.99</ProductPrice>
            </ProductInfo>
          </ProductCard>
        </FeaturedGrid>
        
        <BrowseMoreButton to="/products">Browse All Products</BrowseMoreButton>
      </FeaturedSection>
    </div>
  );
};

export default Home;