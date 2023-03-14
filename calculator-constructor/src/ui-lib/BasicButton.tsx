import React, { FC } from 'react';
import styled from 'styled-components';
import { buttonColor } from '../constants/color';
import { TBasicButton } from '../types/button-type';

type TBaseButton = {
  // isClicked: boolean;
  width: string;
  color?: string;
  id: number | string;
};

const Button = styled.button<TBaseButton>`
    width: ${(props) => props.width};
    height: 48px;
    background-color: ${(props) => props.color};
    border-radius: 6px;
    border: 1px solid #E2E3E5;
    cursor: pointer;
    :active {
      border: 2px solid #5D5FEF;
    }
`;

const Number = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #000000;
    margin: 0;
`;

const BasicButton: FC<TBasicButton> = ({
  width,
  color = buttonColor,
  value,
  name,
}) => {
  const [isClickedStatus, setClickState] = React.useState(false);
  const onButtonClick = () => {
    setClickState(true);
  };

  return (
    <Button
      id={name}
      onClick={onButtonClick}
      width={width}
      color={color}
      type='button'>
      <Number id={name}>{value}</Number>
    </Button>
  );
};

export default BasicButton;


 /*  border: ${(props) => (props.isClicked ? '2px solid #5D5FEF' : '1px solid #E2E3E5')}; */