/* eslint-disable react/no-array-index-key */
import React, { FC } from 'react';
import styled from 'styled-components';
import { NumberAreaProps } from '../types/number-area-type';
import BasicButton from '../ui-lib/BasicButton';

type TNumberArea = {
  widthShadow: boolean;
};

const NumberArea = styled.div<TNumberArea>`
    width: 232px;
    height: 216px;
    background-color: #FFFFFF;
    border: none;
    position: relative;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    &::before {
        content: '';
        width: 240px;
        height: 224px;
        background-color: #FFFFFF;
        filter: ${(props) => (props.widthShadow ? 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' : 'unset')};
        border-radius: 6px;
        position: absolute;
        z-index: -1;
        top: -4px;
        left: -4px;
    }
`;

const UpSignContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
`;

const DownSignContainer = styled.div`
    display: flex;
    gap: 8px;
`;
const NumberAreaElement = styled.li`
    width: 72px;
    height: 48px;
`;

const BasicNumberArea: FC<NumberAreaProps> = ({ widthShadow }) => {
  const [isClicked] = React.useState(false);
  const [currentButton, setCurrentButton] = React.useState<number>();
  const numberArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];


  return (
    <NumberArea widthShadow={widthShadow}>
      <UpSignContainer>
        {numberArr.map((el, index) => (
          <NumberAreaElement key={index}>
            <BasicButton current={currentButton} name={el} value={el} width='72px' />
          </NumberAreaElement>

        ))}
      </UpSignContainer>
      <DownSignContainer>
        <BasicButton current={currentButton} name={0} value={0} width='152px' />
        <BasicButton current={currentButton} name=',' value=',' width='72px' />
      </DownSignContainer>
    </NumberArea>
  );
};

export default BasicNumberArea;
