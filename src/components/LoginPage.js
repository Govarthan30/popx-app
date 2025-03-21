import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align content at the top */
  height: 100vh;
  background: linear-gradient(135deg, rgb(116, 84, 204), #eaeaea);
  padding-top: 50px;
`;

const InnerContainer = styled.div`
  width: 320px;
  height: 650px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color:rgb(0, 0, 0);
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
  text-align: left;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 93%;
  margin-bottom: 20px;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 14px;
  color: #6a5acf;
  background-color: white;
  padding: 0 5px;
  transition: all 0.3s ease;
  pointer-events: none;

  &.active {
    top: -10px;
    font-size: 12px;
    color: #6a5acf;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    border-color: #6a5acf;
    outline: none;
  }

  &:focus ~ ${InputLabel}, 
  &:not(:placeholder-shown) ~ ${InputLabel} {
    top: -10px;
    font-size: 12px;
    color: #6a5acf;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ccc;
  color: black;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(106, 48, 188);
    color: white;
  }
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/signup");
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <Title>Sign in to your PopX account</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>

        <InputWrapper>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" "
          />
          <InputLabel htmlFor="email" className={email ? "active" : ""}>
            Email Address
          </InputLabel>
        </InputWrapper>

        <InputWrapper>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
          />
          <InputLabel htmlFor="password" className={password ? "active" : ""}>
            Password
          </InputLabel>
        </InputWrapper>

        <Button onClick={handleLogin}>Login</Button>
      </InnerContainer>
    </OuterContainer>
  );
};

export default LoginPage;
