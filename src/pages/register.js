import React from "react";
import styled from "styled-components";
import RegisterForm from "../components/register-form";

const Wrapper = styled.div`
  display: flex;
`;

const Side = styled.div`
  min-height: 90vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftSide = styled(Side)``;

const RightSide = styled(Side)``;

const Register = () => (
  <Wrapper>
    <LeftSide>
      <RegisterForm />
    </LeftSide>
    <RightSide></RightSide>
  </Wrapper>
);

export default Register;
