import React from 'react';
import styled from 'styled-components';

const ContactDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: yellow;
`;

const Contact = () => {
  
  console.log('Contact..');  

  return(
    <ContactDiv>
      <h1>Contact</h1>
      Contact Page...
    </ContactDiv>
  );
};

export default Contact;
