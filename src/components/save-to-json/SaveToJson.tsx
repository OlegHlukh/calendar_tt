import { FC, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '../../stores';

const SaveToJson: FC = () => {
  const { tasks } = useStores();

  const saveToJson = useCallback(() => {
    tasks.exportToJson();
  }, []);

  return <button onClick={saveToJson}>Save to json</button>;
};

export default observer(SaveToJson);
