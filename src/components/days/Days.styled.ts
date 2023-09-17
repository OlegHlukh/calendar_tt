import styled from 'styled-components';
import { breakpoints } from '../../style/theme.ts';

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.3rem;

  @media ${breakpoints.down(breakpoints.xl)} {
    grid-template-columns: repeat(5, 1fr);
  }

  @media ${breakpoints.down(breakpoints.lg)} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${breakpoints.down(breakpoints.md)} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
