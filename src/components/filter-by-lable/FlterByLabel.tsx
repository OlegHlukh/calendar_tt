import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';
import LabelSelect from '../label/LabelSelect.tsx';

const FilterByLabel: FC = () => {
  const {
    tasks: { changeFilterByLabel },
    label,
  } = useStores();

  console.log(label, 'from filter');

  const handeChange = (value: string) => {
    changeFilterByLabel(value);
  };

  return <LabelSelect handleChange={handeChange} />;
};

export default observer(FilterByLabel);
