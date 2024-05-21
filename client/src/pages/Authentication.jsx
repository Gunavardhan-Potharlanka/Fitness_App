import React from 'react'
import {lightTheme} from '../utils/Themes'
import {styled} from 'styled-components'
import LogoImage from '../utils/Images/Logo.png'
import AuthImage from '../utils/Images/AuthImage.jpg'
import { useState } from 'react';
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
const Authentication = () => {  
    const [login, setLogin] = useState(false);
    const Container = styled.div`
    flex:1 ;
    height: 100%;
    display: flex;
    background: ${({theme}) => theme.bg};
    @media (max-width : 700px){
        flex-direction: column
    }
    `;
    const Left = styled.div`
    flex: 1;
    position: relative;
    `;
    const Right = styled.div`
    flex: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 16px;
    align-items: center;
    `;
    const Logo = styled.img`
    position : absolute;
    width: 70px;
    left: 60px;
    top: 40px;
    z-index: 10;
    `;
    const Image = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
    object-fit: cover;
    `;
    const Text = styled.div`
    font-size: 16px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};
    margin-top: 16px;
    @media (max-width: 400px) {
        font-size: 14px;
    }
    `;
    const TextButton = styled.span`
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
    color: ${({theme}) => theme.primary};
    
    `;
  return (
    <Container>
        <Left>
            <Logo src={LogoImage} />
            <Image src={AuthImage} />
        </Left>
        <Right>
           {!login ? (
           <>
              <SignIn />
              <Text>Don't have an account? <TextButton onClick={() => setLogin(true)}>SignUp</TextButton></Text>
            </>) : (
           <>
              <SignUp />
              <Text>Already have an account? <TextButton onClick={() => setLogin(false)}>SignIn</TextButton></Text> 
           </>)} 
        </Right>
    </Container>
  )
}

export default Authentication