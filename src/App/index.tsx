import React, { FC } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { DonateCard } from '../components/DonateCard/index';
import { useApp } from '../hooks/useApp';
import { Snackbar } from '../components/Snackbar/index';

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1083px;
  margin: 0 auto;
`;

const Grid = styled.div`
  width: 50%;
  padding: 2.2%;
  box-sizing: border-box;

  ${media.lessThan('medium')`
    width: 100%;
  `}
`;

const Title = styled.h1`
  color: #5b657c;
  text-align: center;
`;

const DonateMessage = styled.p`
  color: #5b657c;
  margin: 1em 0;
  font-size: 1.1em;
  text-align: center;
`;

export const App: FC = () => {
  const { charities, totalAmount, submitPayment } = useApp();
  return (
    <div>
      <Snackbar />
      <Title>Tamboon React</Title>
      <DonateMessage>
        Total donation amount: <strong>{totalAmount}</strong>
      </DonateMessage>
      <GridContainer>
        {charities.map((charityItem) => (
          <Grid>
            <DonateCard
              onPayClick={submitPayment}
              name={charityItem.name}
              imageSrc={charityItem.image}
              id={charityItem.id}
              currency={charityItem.currency}
            />
          </Grid>
        ))}
      </GridContainer>
    </div>
  );
};
