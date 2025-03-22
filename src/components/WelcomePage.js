import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, rgb(116, 84, 204), #eaeaea);
`;

const InnerContainer = styled.div`
  width: 320px;
  height: 500px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
  padding-top: 150px; /* Push content down */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: rgb(0, 0, 0); /* Black text */
  margin-top: 200px;
  font-weight: bold; /* Bold text */
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin: 10px 0;
  color: white;
  background-color: ${({ variant }) => 
    variant === 'primary' ? 'rgb(87, 24, 223)' : 'rgb(200, 180, 230)'
  };
  color: ${({ variant }) => 
    variant === 'primary' ? 'white' : '#3d2352'
  };
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(167, 149, 205);
    color: white;
  }
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const WelcomePage = () => {
  return (
    <OuterContainer>
      <InnerContainer>
        <Title>Welcome to PopX</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </Subtitle>
        {/* Add the 'variant' prop to differentiate button styles */}
        <Button as={StyledLink} to="/login" variant="primary">
          Create Account
        </Button>
        <Button as={StyledLink} to="/login" variant="secondary">
          Already Registered? Login
        </Button>
      </InnerContainer>
    </OuterContainer>
  );
};

export default WelcomePage;