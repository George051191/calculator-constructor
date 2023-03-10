import React, { FC } from 'react';
import styled from 'styled-components';
import { buttonColor } from '../constants/color';
import { TBasicButton } from '../types/button-type';

type TBaseButton = {
  isClicked: boolean;
  width: string;
  color?: string;
};

const Button = styled.button<TBaseButton>`
    width: ${(props) => props.width};
    height: 48px;
    background-color: ${(props) => props.color};
    border-radius: 6px;
    border: ${(props) => (props.isClicked ? '2px solid #5D5FEF' : '1px solid #E2E3E5')};
    cursor: pointer;
`;

const Number = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #000000;
`;

const BasicButton: FC<TBasicButton> = ({
  isClicked, width, color = buttonColor, value,
}) => (
  <Button
    isClicked={isClicked}
    width={width}
    color={color}
    type='button'>
    <Number>{value}</Number>
  </Button>
);

export default BasicButton;
