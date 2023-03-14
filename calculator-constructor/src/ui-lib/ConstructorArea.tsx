import React, { FC } from 'react';
import styled from 'styled-components';
import { TArea } from '../types/area-type';

type TConstructorArea = {
  isDragging: boolean;
};

const Area = styled.div<TConstructorArea>`
    box-sizing: border-box;
    width: 243px;
    height: 448px;
    border: 2px dashed #C4C4C4;
    border-radius: 6px;
    background-color: ${(props) => (props.isDragging ? '#F0F9FF' : '#FFFFFF')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

type TAreaInnerContainer = {
  isVisible: boolean;
  image: string;
};

const InnerContainer = styled.p<TAreaInnerContainer>`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    display: ${(props) => (props.isVisible ? 'block' : 'none')};
    line-height: 17px;
    text-align: center;
    color: #5D5FEF;
    position: relative;
    margin: 0;
    ::after {
        content: '';
        position: absolute;
        display: block;
        width: 23px;
        height: 20px;
        background: url(${(props) => (props.image)});
        background-repeat: no-repeat;
        background-position: center;
        top: -22px;
        left: 50px;
    }
    ::before {
        content: 'любой элемент из левой панели';
        position: absolute;
        width: 106px;
        height: 30px;
        left: 10px;
        top: 21px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        color: #6B7280;
    }
    
`;

const ConstructorArea: FC<TArea> = ({ isDragging, isVisible, image }) => (
  <Area isDragging={isDragging}>
    <InnerContainer image={image} isVisible={isVisible}>Перетащите сюда</InnerContainer>
  </Area>
);

export default ConstructorArea;
