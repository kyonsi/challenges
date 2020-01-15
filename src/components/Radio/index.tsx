import React, { FC } from 'react';
import styled from 'styled-components';

const RadioButton = styled.input``;

const RadioWrapper = styled.label`
  color: #ccc;
  position: relative;
  display: flex;
  align-items: center;
  &:hover div {
    opacity: 0.6;
  }
`;

const RadioLabel = styled.div`
  font-size: 14px;
  color: #1c3284;
`;

export const Radio: FC<{
  onClick: (event: any) => void;
}> = (props) => {
  const { children, onClick } = props;
  return (
    <RadioWrapper>
      <RadioLabel>
        <RadioButton type="radio" name="payment" onClick={onClick} />
        {children}
      </RadioLabel>
    </RadioWrapper>
  );
};
