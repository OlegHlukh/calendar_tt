import styled from 'styled-components';

export const Root = styled.div<{ isDragging: boolean }>`
  border-radius: 5px;
  padding: 1rem;
  user-select: none;
  background-color: ${(props) => (props.isDragging ? '#0ee0cc' : '#fff')};
  margin-inline: 0.2rem;
  transition: background-color 200ms ease-in-out;

  display: grid;
  gap: 1rem;

  & h4 {
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
  overflow-x: hidden;
  height: 15rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;
