import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' alt='logos' />
        <Signup>GET THE DISNEY BUNDLE</Signup>
        <Description>
          Steam now.
          <span>
            <Link to={window.location.pathname} hash='/login'
            style={{color: "#fff"}}
            >
              Terms Apply
            </Link>
          </span>
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt='logos' />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
 

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url('/images/login-background.jpg');
    background-position: top;
    background-size: cover;
    opacity: 0.7;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;
const CTALogoOne = styled.img``;

const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;

  span {
      margin-left: 5px;
  }

`;

const CTALogoTwo = styled.img`
  margin-top: 20px;
  width: 90%;
`
