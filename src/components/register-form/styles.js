import styled from "styled-components";
import {
  Field,
  Form as FormikForm,
  ErrorMessage as FormikErrorMessage
} from "formik";

const Form = styled(FormikForm)`
  width: 60%;
  margin: auto;
  padding: auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled(Field)`
  font-size: 18px;
  margin: 0.5em auto;
  height: 2em;
  width: 70%;
  border: 1px solid gray;
  border-radius: 8px;
`;

const Button = styled.button`
  font-size: 18px;
  height: 2em;
  width: 70%;
  margin: 0.5em auto;
  border: none;
  color: white;
  background-color: #0055f5;
`;

const ErrorMessage = styled(FormikErrorMessage)`
  width: 70%;
  margin: 0.5em auto;
`;

export { Input, Form, Button, ErrorMessage };
