import React from 'react';
import styled from 'styled-components';

type TSwitchButton = {
  isClicked: boolean;
  width: string;
};



const Button = styled.button<TSwitchButton>`
    height: 36px;
    color: ${(props) => (props.isClicked ? '#FFFFFF' : '#E2E3E5')};
    width: ${(props) => props.width}
    cursor: pointer;
`;

const ButtonText = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 15px;
    color: #4D5562;
`;

const ButtonIcon = styled.image`
    width:20px;
    height:20px;
`;
