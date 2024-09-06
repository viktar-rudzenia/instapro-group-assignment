import { useContext, useState } from 'react';

import { TrButton } from 'src/components/shared';
import TrelloBoardContext from 'src/store/TrelloBoardContext';

import styles from './index.module.scss';

export default function CreateColumn({
  setIsColumnFormOpen,
}: {
  setIsColumnFormOpen: (value: boolean) => void;
}) {
  const [newColumnLabel, setNewColumnLabel] = useState('');
  const { columns, setColumns } = useContext(TrelloBoardContext);

  const handleColumnSubmit = () => {
    setColumns([
      ...columns,
      {
        id: Date.now(),
        label: newColumnLabel,
        cards: [],
      },
    ]);
    setIsColumnFormOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <input value={newColumnLabel} onChange={(e) => setNewColumnLabel(e.target.value)} />
      <TrButton onClick={handleColumnSubmit}>Add List</TrButton>
      <TrButton additionalClassName={styles.closeButton} onClick={() => setIsColumnFormOpen(false)}>
        X
      </TrButton>
    </div>
  );
}
