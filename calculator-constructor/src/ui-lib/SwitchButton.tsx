/* eslint-disable ternary/no-unreachable */
import React, { FC } from 'react';
import styled from 'styled-components';
import { TSwithButtonType, IconEnum } from '../types/switch-button-type';
import { ReactComponent as EyePic } from '../vendor/images/eye.svg';
import { ReactComponent as ConstructorPic } from '../vendor/images/constructor.svg';

type TSwitchButton = {
  isClicked: boolean;
  width: string;
};

type TIconProps = {
  isClicked: boolean;
};

const Button = styled.button<TSwitchButton>`
    height: 36px;
    background-color: ${(props) => (props.isClicked ? '#FFFFFF' : '#E2E3E5')};
    width: ${(props) => props.width};
    cursor: pointer;
    display: flex;  
    border: ${(props) => (props.isClicked ? '1px solid #E2E3E5' : 'none')};
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const ButtonText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #4D5562;
    margin: 0;
`;

const ButtonEyeIcon = styled(EyePic)<TIconProps>`
    width:20px;
    height:20px;
    display: block;
    & path {
        stroke: ${(props) => (props.isClicked ? '#5D5FEF' : '#4D5562')};
    }
`;

const ButtonConstructorIcon = styled(ConstructorPic) <TIconProps>`
    width:20px;
    height:20px;
    display: block;
    & path {
        stroke: ${(props) => (props.isClicked ? '#5D5FEF' : '#4D5562')};
    }
`;

const SwitchButton: FC<TSwithButtonType> = ({
  isClicked, width, iconType, buttonText,
}) => (
  <Button isClicked={isClicked} width={width}>
    {iconType === IconEnum.RUN_TIME && <ButtonEyeIcon isClicked={isClicked} />}
    {iconType === IconEnum.CONSTRUCTOR && <ButtonConstructorIcon isClicked={isClicked} />}
    <ButtonText>{buttonText}</ButtonText>
  </Button>
);

export default SwitchButton;
