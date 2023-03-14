import React, { FC } from 'react';
import styled from 'styled-components';
import { ScreenProps } from '../types/screen-props';

type TScreen = {
  widthShadow: boolean;
};

const Screen = styled.div<TScreen>`
     background-color: #F3F4F6;
     display: flex;
     justify-content: end;
     align-items: center;
     width: 232px;
    height: 64px;
    border: none;
    position: relative;
    border-radius: 6px;
    padding: 8px;
    box-sizing: border-box;
    &::before {
        content: '';
        width: 240px;
        height: 72px;
        background-color: #FFFFFF;
        filter: ${(props) => (props.widthShadow ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' : 'unset')};
        border-radius: 6px;
        position: absolute;
        z-index: -1;
        top: -4px;
        left: -4px;
    }
`;
const ScreenNumber = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 36px;
    line-height: 44px;
    color: #111827;
`;

const BasicScreen:FC<ScreenProps> = ({ widthShadow, numberValue }) => (
  <Screen widthShadow={widthShadow}>
    <ScreenNumber>{numberValue}</ScreenNumber>
  </Screen>
);

export default BasicScreen;