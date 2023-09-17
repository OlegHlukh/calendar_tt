import { FC, useRef } from 'react';
import TextInput from '../ui/Input.tsx';

interface EditTaskProps {
  value: string;
  handleSave: (value: string) => void;
}

const EditTask: FC<EditTaskProps> = ({ value, handleSave }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div>
      <TextInput ref={ref} defaultValue={value} />
      <button
        onClick={() => {
          handleSave(ref?.current?.value ?? value);
        }}
      >
        save
      </button>
    </div>
  );
};

export default EditTask;
