import React, { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { PaymentsPostRequest } from '../../api/payments';
import { Button } from '../Button';
import { Radio } from '../Radio/index';
import { Currency } from '../../api/charities';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.95;
  background: #fff;
  z-index: 1;
  text-align: center;
  border-radius: 3px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 280px;
`;

const CloseButton = styled(Button)`
  border: none;
  color: #444;
  font-weight: bold;
  right: 10px;
  position: absolute;
  top: 10px;
`;

const PaymentButton = styled(Button)`
  display: block;
  margin: 10px auto;
`;

const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PaymentText = styled.p`
  font-size: 1.2em;
  margin-top: 0;
  margin-bottom: 5px;
  color: #1c3284;
`;

const AMOUNTS = [10, 20, 50, 100, 500];

export const PaymentOverray: FC<{
  id: number;
  currency: Currency;
  onPayClick: (payload?: PaymentsPostRequest) => void;
  onCloseClick: () => void;
}> = (props) => {
  const { id, currency, onPayClick, onCloseClick } = props;
  const [selectAmount, setSelectAmount] = useState(0);
  const handleClickPay = useCallback(() => {
    onPayClick({
      currency,
      charitiesId: id,
      amount: selectAmount
    });
  }, [currency, id, onPayClick, selectAmount]);
  return (
    <Wrapper>
      <CloseButton onClick={onCloseClick}>X</CloseButton>
      <PaymentContainer>
        <PaymentText>Select the amount to Donate({currency})</PaymentText>
        <RadioContainer>
          {AMOUNTS.map((amount) => (
            <Radio key={amount} onClick={() => setSelectAmount(amount)}>
              {amount}
            </Radio>
          ))}
        </RadioContainer>
        <PaymentButton onClick={handleClickPay}>Pay</PaymentButton>
      </PaymentContainer>
    </Wrapper>
  );
};
