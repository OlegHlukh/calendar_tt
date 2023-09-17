import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styled from 'styled-components';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return (
    <Button {...rest}>
      <span>{icon}</span>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  aspect-ratio: 1;
  transition: background-color 300ms ease-in-out;
  width: 30px;

  &:hover {
    cursor: pointer;
    background-color: #fff;
  }
`;

export default IconButton;
