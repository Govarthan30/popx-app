import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Fade-in animation for the container
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, rgb(116, 84, 204), #eaeaea);
  padding-top: 30px;
  animation: ${fadeIn} 0.6s ease-in-out;
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
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 93%;
  margin-top: 10px;
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

// Scale animation for input fields on focus
const Input = styled.input`
  width: 100%;
  padding: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #6a5acf;
    outline: none;
    transform: scale(1.05); // Slight scale effect
  }

  &:focus ~ ${InputLabel},
  &:not(:placeholder-shown) ~ ${InputLabel} {
    top: -10px;
    font-size: 12px;
    color: #6a5acf;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

const RadioLabel = styled.label`
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 5px;
`;

// Button hover animation with scaling
const Button = styled.button`
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  background-color: #6a5acf;
  color: white;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color:rgb(200, 180, 230);
  }
`;

const SignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState(true);
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Company Name:", companyName);
    console.log("Is Agency:", isAgency);

    navigate("/account-settings", {
      state: { userName: fullName, userEmail: email },
    });
  };

  return (
    <OuterContainer>
      <InnerContainer>
        <div>
          <Title>Create your PopX account</Title>
          <FormContainer>
            <InputWrapper>
              <Input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder=" " />
              <InputLabel htmlFor="fullName" className={fullName ? "active" : ""}>Full Name*</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input id="phoneNumber" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" " />
              <InputLabel htmlFor="phoneNumber" className={phoneNumber ? "active" : ""}>Phone Number*</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " />
              <InputLabel htmlFor="email" className={email ? "active" : ""}>Email Address*</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" " />
              <InputLabel htmlFor="password" className={password ? "active" : ""}>Password*</InputLabel>
            </InputWrapper>
            <InputWrapper>
              <Input id="companyName" type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder=" " />
              <InputLabel htmlFor="companyName" className={companyName ? "active" : ""}>Company Name*</InputLabel>
            </InputWrapper>
            <RadioGroup>
                {/* Question */}
                <p style={{ fontWeight: "bold", marginBottom: "8px" }}>Are you an Agency?</p>

                {/* Yes Option */}
                <RadioLabel>
                  <input
                    type="radio"
                    id="yes"
                    name="agency"
                    checked={isAgency}
                    onChange={() => setIsAgency(true)}
                  />
                  <span style={{ marginLeft: "8px" }}>Yes</span>
                </RadioLabel>

                {/* No Option */}
                <RadioLabel>
                  <input
                    type="radio"
                    id="no"
                    name="agency"
                    checked={!isAgency}
                    onChange={() => setIsAgency(false)}
                  />
                  <span style={{ marginLeft: "8px" }}>No</span>
                </RadioLabel>
              </RadioGroup>
          </FormContainer>
        </div>
        <Button onClick={handleSignup}>Create Account</Button>
      </InnerContainer>
    </OuterContainer>
  );
};

export default SignupPage;
