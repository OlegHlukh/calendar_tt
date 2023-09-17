import { ChangeEvent, FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import debounce from 'lodash.debounce';
import useStores from '../../stores';
import TextInput from '../ui/Input.tsx';

const FilterByTitle: FC = () => {
  const {
    tasks: { changeFilterByTitle },
  } = useStores();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    changeFilterByTitle(event.target.value);
  };

  const debounceChangeHandler = useMemo(() => {
    return debounce(onChangeHandler, 500);
  }, []);

  return (
    <>
      <TextInput placeholder="Task title" onChange={debounceChangeHandler} />
    </>
  );
};

export default observer(FilterByTitle);
