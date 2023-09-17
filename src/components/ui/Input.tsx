import { ForwardedRef, forwardRef, InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const TextInput = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const id = useId();

    return (
      <div>
        {props.label && <label htmlFor={id}>{props.label}</label>}
        <Input id={id} ref={ref} {...props} />
      </div>
    );
  },
);

export default TextInput;

const Input = styled.input`
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem;
  border: none;
`;
