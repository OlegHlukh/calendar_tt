import styled from 'styled-components';

export const Root = styled.div<{ disable: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: 1rem;

  background-color: rgba(71, 169, 169, 0.27);
  opacity: ${(props) => (props.disable ? '.4' : 1)};
  overflow: auto;

  border-radius: 5px;
  height: 18rem;

  & strong {
    font-size: 1.6rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 1rem;

  & strong {
    font-size: 1.6rem;
  }

  & span {
    opacity: 0.5;
    font-size: 1rem;
  }
`;
