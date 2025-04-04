import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 20px 0;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const PageDescription = styled.p`
  color: #666;
  font-size: 16px;
  max-width: 800px;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const FilterLabel = styled.span`
  font-size: 14px;
  color: #666;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  min-width: 150px;
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 220px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductCategory = styled.span`
  font-size: 12px;
  color: #6c5ce7;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 8px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
  line-height: 1.4;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  color: #2d3436;
  font-weight: 700;
`;

const Products = () => {
  return (
    <ProductsContainer>
      <PageHeader>
        <PageTitle>Our Products</PageTitle>
        <PageDescription>
          Browse our collection of premium products designed to meet your needs. 
          Filter and sort to find exactly what you're looking for.
        </PageDescription>
      </PageHeader>
      
      <FilterSection>
        <FilterGroup>
          <FilterLabel>Category:</FilterLabel>
          <FilterSelect>
            <option value="all">All Categories</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </FilterSelect>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>Sort by:</FilterLabel>
          <FilterSelect>
            <option value="popular">Most Popular</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </FilterSelect>
        </FilterGroup>
      </FilterSection>
      
      <ProductGrid>
        {Array(9).fill().map((_, index) => (
          <ProductCard key={index}>
            <ProductImage>Product Image Placeholder</ProductImage>
            <ProductInfo>
              <ProductCategory>Category {(index % 3) + 1}</ProductCategory>
              <ProductName>Product {index + 1}</ProductName>
              <ProductDescription>
                This is a short description of the product. It highlights the key features.
              </ProductDescription>
              <ProductPrice>${(Math.random() * 100 + 50).toFixed(2)}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsContainer>
  );
};

export default Products;