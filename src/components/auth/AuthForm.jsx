import React,{useMemo} from 'react';
import styled from 'styled-components';
import palette from '../../lib/palette';
import Button from '../Button';
import { Link } from 'react-router-dom';

/*
  회원가입 또는 로그인 폼을 보여줍니다.
*/
const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom : 1rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom : 0.5rem;
  outline: none;
  width: 100%;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom : 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;

  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align : right;
  a {
    color : ${palette.gray[6]};
    text-decoration : underline;
    &:hover {
      color : ${palette.gray[9]};
    }
  }
`;


const ButtonWithMarginTop = styled(Button)`
  margin-top:1rem;
`;

const textMap = {
  login : 'LOG IN',
  register : "RESISTER"
};

const AuthForm = ({type, form, handleChange, handleSubmit}) => {
  console.log("what",form)

  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={handleSubmit}>
        <StyledInput autoComplete="userName" name="username" placeholder="ID" onChange={handleChange} value={form.username || ""}/>
        <StyledInput autoComplete="newPassword" name="password" placeholder="PASSWORD" type="password" onChange={handleChange} value={form.password || ""} />
        {type === "register" && (
          <StyledInput autoComplete="newPassword" name="passwordConfirm" placeholder="PASSWORD CHECK" type="password" onChange={handleChange} value={form.passwordConfirm || ""}/>
        )}
        <ButtonWithMarginTop cyan fullWidth>{text}</ButtonWithMarginTop>
      </form>
      <Footer>
        {type === 'login'
        ? (
          <Link to="/register">Register</Link>
          )
        : (
          <Link to="/login">Log in</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;