import { FC, MouseEvent, useCallback, useMemo, useState } from 'react';
import useStores from '../../stores';
import CreateNewLabel from './CreateNewLabel.tsx';
import { observer } from 'mobx-react-lite';
import Select, { SingleValue, Props } from 'react-select';
import Modal from '../modal/Modal.tsx';

interface LabelSelectProps extends Props {
  handleChange: (value: string) => void;
  showCreateLabel?: boolean;
}

interface Options {
  label: string;
  value: string;
}

const LabelSelect: FC<LabelSelectProps> = ({
  handleChange,
  showCreateLabel,
}) => {
  const [isCreateNewOpen, setIsCreateNew] = useState(false);

  const {
    label: { labels },
  } = useStores();

  const options = useMemo(() => {
    const options = labels.map((el) => ({
      label: el.title,
      value: el.id,
    }));

    if (showCreateLabel) {
      options.push({
        label: 'Create new label',
        value: 'create',
      });
    }

    return options;
  }, [labels.length, showCreateLabel]);

  const onChange = (selectedOptions: SingleValue<Options>) => {
    const value = selectedOptions?.value;

    if (value === 'create') {
      setIsCreateNew(true);

      return;
    }

    handleChange(value ?? '');
  };

  const onCloseModal = useCallback(() => {
    setIsCreateNew(false);
  }, []);

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleOverlayClick}>
      <Select
        options={options}
        onChange={onChange}
        placeholder={'Select label'}
        isClearable={true}
      />
      <Modal
        isOpen={isCreateNewOpen}
        onClose={() => {
          setIsCreateNew(false);
        }}
      >
        <h3>Create new label</h3>
        <CreateNewLabel onCloseModal={onCloseModal} />
      </Modal>
    </div>
  );
};

export default observer(LabelSelect);
