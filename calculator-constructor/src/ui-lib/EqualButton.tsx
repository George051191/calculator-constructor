import React, { FC } from 'react';
import styled from 'styled-components';
import { EqualButtonProps } from '../types/equal-button-type';

type TEqualButton = {
  widthShadow: boolean;
};

const BasicEqualButton = styled.button<TEqualButton>`
    width: 232px;
    height: 64px;
    background-color: #5D5FEF;
    border: none;
    position: relative;
    border-radius: 6px;
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
const EqualSign = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #FFFFFF;
`;

const EqualButton:FC<EqualButtonProps> = ({ widthShadow }) => (
  <BasicEqualButton widthShadow={widthShadow} type='button'>
    <EqualSign>=</EqualSign>
  </BasicEqualButton>
);

export default EqualButton;
