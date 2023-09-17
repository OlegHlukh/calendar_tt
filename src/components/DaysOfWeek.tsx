import { FC } from 'react';
import styled from 'styled-components';
import { DAY_OF_WEEK } from '../utils/day-of-week.ts';

const DaysOfWeek: FC = () => {
  return (
    <Root>
      {DAY_OF_WEEK.map((item) => (
        <Day>
          <strong>{item}</strong>
        </Day>
      ))}
    </Root>
  );
};

export default DaysOfWeek;

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;
`;

const Day = styled.div`
  display: grid;
  place-items: center;
  min-height: 10rem;
  background-color: #a4e1dc;

  & strong {
    font-size: 1.6rem;
    font-weight: bold;
  }
`;
