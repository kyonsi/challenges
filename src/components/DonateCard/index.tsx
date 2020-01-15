import styled from 'styled-components';
import React, { FC, useCallback, useState } from 'react';
import { PaymentsPostRequest } from '../../api/payments';
import { Button } from '../Button';
import { PaymentOverray } from '../PaymentOverray';
import { Currency } from '../../api/charities';

const Card = styled.div`
  margin: 10px;
  border-radius: 3px;
  box-shadow: 0px 5px 10px #ccc;
  color: #5b657c;
  position: relative;
`;

const Image = styled.div<{
  src: string;
}>`
  height: 200px;
  width: 100%;
  border-radius: 3px 3px 0 0;
  background: center no-repeat url(${(props) => (props.src ? `images/${props.src}` : 'none')});
  background-size: cover;
`;

const CardFooter = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

type Props = {
  id: number;
  name: string;
  imageSrc: string;
  currency: Currency;
  onPayClick: (payload?: PaymentsPostRequest) => void;
};
export const DonateCard: FC<Props> = (props) => {
  const { imageSrc, id, currency, name, onPayClick } = props;
  const [isShowOverray, setShowOverray] = useState(false);
  const toggleShowOverray = useCallback(() => {
    setShowOverray(!isShowOverray);
  }, [isShowOverray]);
  return (
    <Card>
      <div>
        <Image src={imageSrc} />
        <CardFooter>
          <strong>{name}</strong>
          <Button onClick={toggleShowOverray}>Donate</Button>
        </CardFooter>
      </div>
      {isShowOverray ? (
        <PaymentOverray
          id={id}
          currency={currency}
          onCloseClick={toggleShowOverray}
          onPayClick={onPayClick}
        />
      ) : null}
    </Card>
  );
};
