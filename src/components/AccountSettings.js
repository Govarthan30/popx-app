import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { FiUser } from "react-icons/fi"; // Importing user icon
import { motion } from "framer-motion"; // Importing framer-motion for animations

const OuterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  background: linear-gradient(135deg, rgb(116, 84, 204), #eaeaea);
  padding-top: 30px;
`;

const InnerContainer = styled(motion.div)`
  width: 320px;
  height: 650px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled(motion.h1)`
  font-size: 24px;
  color: rgb(0, 0, 0);
  margin-bottom: 10px;
  text-align: left;
`;

const ProfileSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled(motion.div)`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #6a5acf;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eaeaea;
  color: #6a5acf;
  font-size: 40px;
`;

const UserName = styled(motion.h2)`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const UserEmail = styled(motion.p)`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const Description = styled(motion.p)`
  font-size: 14px;
  color: #666;
  text-align: left;
  margin-top: 10px;
  margin-bottom: 380px;
`;

const AccountSettings = () => {
  const location = useLocation();
  const { userName, userEmail } = location.state || {};

  return (
    <OuterContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <InnerContainer initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
        <Title initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>Account Settings</Title>
        <ProfileSection initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.4 }}>
          <ProfileImage whileHover={{ scale: 1.1 }}>
            <FiUser /> {/* Displaying a user icon if no image is provided */}
          </ProfileImage>
          <UserName>{userName || "Guest-sample"}</UserName>
          <UserEmail>{userEmail || "guest@example.com"}</UserEmail>
        </ProfileSection>
        <Description initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Welcome to your account settings. Here, you can manage your profile and preferences.
          <strong>Developed by Govarthan V</strong>.
        </Description>
      </InnerContainer>
    </OuterContainer>
  );
};

export default AccountSettings;
