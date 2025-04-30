import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  border: 0;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-weight: 700;
  justify-content: center;
  padding: 0 8px;
  background-color: #3da5f5;
  color: #fff;
  transition: background-color 0.2s ease-in-out;

  &:not(:disabled):hover {
    background-color: #3186c4;
  }

  font-size: 18px;
  height: 55px;
  letter-spacing: -0.02em;
  line-height: 28px;
`;

interface ButtonProprs {
  text: string;
  btnType?: "primary" | "";
  iconPosition?: string;
  iconName?: string;
  btnSize?: 32 | 64;
  color: string;
  thin?: boolean;
}

function Button({ text }: ButtonProprs): JSX.Element {
  return <ButtonStyle type="button">{text ? text : "버튼입니다"}</ButtonStyle>;
}

export default Button;
