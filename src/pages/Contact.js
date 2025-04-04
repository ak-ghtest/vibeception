import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2d3436;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #6c5ce7;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    border-color: #6c5ce7;
    outline: none;
  }
`;

const SubmitButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  
  &:hover {
    background-color: #5b4cc4;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: #b2bec3;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div``;

const ContactInfoItem = styled.div`
  margin-bottom: 30px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  position: relative;
  padding-bottom: 10px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #6c5ce7;
  }
`;

const ContactInfoText = styled.p`
  color: #4a4a4a;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 8px;
`;

const MapPlaceholder = styled.div`
  height: 300px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  margin-top: 30px;
`;

const SuccessMessage = styled.div`
  background-color: #c4e6c3;
  border: 1px solid #a5d6a7;
  color: #2e7d32;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be your form submission logic
    // For now, we'll just simulate success
    setSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 5000);
  };
  
  return (
    <ContactContainer>
      <PageHeader>
        <PageTitle>Contact Us</PageTitle>
        <PageSubtitle>
          We'd love to hear from you. Please fill out the form below or use our contact information.
        </PageSubtitle>
      </PageHeader>
      
      <ContactSection>
        <ContactForm onSubmit={handleSubmit}>
          <SuccessMessage visible={submitted}>
            Thank you for your message! We'll get back to you as soon as possible.
          </SuccessMessage>
          
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <ContactInfoItem>
            <ContactInfoTitle>Our Address</ContactInfoTitle>
            <ContactInfoText>123 E-Commerce Street</ContactInfoText>
            <ContactInfoText>Shopping District, SP 12345</ContactInfoText>
            <ContactInfoText>United States</ContactInfoText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactInfoTitle>Contact Details</ContactInfoTitle>
            <ContactInfoText>Email: info@vibeception.com</ContactInfoText>
            <ContactInfoText>Phone: +1 (123) 456-7890</ContactInfoText>
            <ContactInfoText>Customer Support: +1 (123) 456-7891</ContactInfoText>
          </ContactInfoItem>
          
          <ContactInfoItem>
            <ContactInfoTitle>Business Hours</ContactInfoTitle>
            <ContactInfoText>Monday - Friday: 9:00 AM - 6:00 PM</ContactInfoText>
            <ContactInfoText>Saturday: 10:00 AM - 4:00 PM</ContactInfoText>
            <ContactInfoText>Sunday: Closed</ContactInfoText>
          </ContactInfoItem>
          
          <MapPlaceholder>Map Placeholder</MapPlaceholder>
        </ContactInfo>
      </ContactSection>
    </ContactContainer>
  );
};

export default Contact;