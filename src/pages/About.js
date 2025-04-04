import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 20px 0;
`;

const PageHeader = styled.div`
  margin-bottom: 40px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 10px;
`;

const PageSubtitle = styled.p`
  color: #666;
  font-size: 16px;
  max-width: 800px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #6c5ce7;
  }
`;

const StorySection = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StoryContent = styled.div`
  flex: 1;
`;

const StoryImageContainer = styled.div`
  flex: 1;
  height: 400px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const Paragraph = styled.p`
  color: #4a4a4a;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 15px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const ValueTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: #2d3436;
`;

const ValueDescription = styled.p`
  color: #636e72;
  font-size: 15px;
  line-height: 1.6;
`;

const TeamSection = styled.div`
  text-align: center;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const TeamMemberImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
`;

const TeamMemberInfo = styled.div`
  padding: 20px;
`;

const TeamMemberName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
`;

const TeamMemberRole = styled.p`
  color: #6c5ce7;
  font-size: 14px;
  margin-bottom: 10px;
`;

const TeamMemberBio = styled.p`
  color: #636e72;
  font-size: 14px;
  line-height: 1.5;
`;

const About = () => {
  return (
    <AboutContainer>
      <PageHeader>
        <PageTitle>About Us</PageTitle>
        <PageSubtitle>
          Learn more about our story, our mission, and the team behind Vibeception.
        </PageSubtitle>
      </PageHeader>
      
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <StorySection>
          <StoryContent>
            <Paragraph>
              Founded in 2023, Vibeception began with a simple vision: to create an 
              e-commerce platform that prioritizes quality, customer experience, and sustainability.
            </Paragraph>
            <Paragraph>
              What started as a small operation has grown into a thriving online marketplace, 
              serving customers worldwide with a carefully curated selection of products.
            </Paragraph>
            <Paragraph>
              Our journey hasn't always been easy, but our commitment to excellence 
              and our passion for what we do has never wavered. Today, we're proud to 
              be one of the most trusted names in online retail.
            </Paragraph>
          </StoryContent>
          <StoryImageContainer>Company Image Placeholder</StoryImageContainer>
        </StorySection>
      </Section>
      
      <Section>
        <SectionTitle>Our Values</SectionTitle>
        <ValuesGrid>
          <ValueCard>
            <ValueTitle>Quality First</ValueTitle>
            <ValueDescription>
              We never compromise on quality. Every product on our platform meets 
              our strict standards for durability, performance, and design.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueTitle>Customer Obsession</ValueTitle>
            <ValueDescription>
              Our customers are at the heart of everything we do. We continuously 
              strive to exceed expectations and deliver exceptional service.
            </ValueDescription>
          </ValueCard>
          
          <ValueCard>
            <ValueTitle>Sustainability</ValueTitle>
            <ValueDescription>
              We're committed to reducing our environmental impact and promoting 
              sustainable practices throughout our business operations.
            </ValueDescription>
          </ValueCard>
        </ValuesGrid>
      </Section>
      
      <Section>
        <SectionTitle>Our Team</SectionTitle>
        <TeamSection>
          <Paragraph>
            Meet the dedicated professionals who make Vibeception possible. Our diverse 
            team brings together expertise from retail, technology, design, and customer service.
          </Paragraph>
          
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage>Photo Placeholder</TeamMemberImage>
              <TeamMemberInfo>
                <TeamMemberName>Jane Doe</TeamMemberName>
                <TeamMemberRole>CEO & Founder</TeamMemberRole>
                <TeamMemberBio>
                  With 15+ years in retail and e-commerce, Jane leads the company with vision and passion.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>Photo Placeholder</TeamMemberImage>
              <TeamMemberInfo>
                <TeamMemberName>John Smith</TeamMemberName>
                <TeamMemberRole>CTO</TeamMemberRole>
                <TeamMemberBio>
                  John oversees all technical aspects of the platform, ensuring a seamless shopping experience.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>Photo Placeholder</TeamMemberImage>
              <TeamMemberInfo>
                <TeamMemberName>Emily Johnson</TeamMemberName>
                <TeamMemberRole>Creative Director</TeamMemberRole>
                <TeamMemberBio>
                  Emily brings her artistic vision to shape the brand identity and visual direction.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>Photo Placeholder</TeamMemberImage>
              <TeamMemberInfo>
                <TeamMemberName>Michael Brown</TeamMemberName>
                <TeamMemberRole>Customer Experience Lead</TeamMemberRole>
                <TeamMemberBio>
                  Michael ensures every customer interaction exceeds expectations.
                </TeamMemberBio>
              </TeamMemberInfo>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
      </Section>
    </AboutContainer>
  );
};

export default About;