import { useContext, useState } from 'react';

import { TrButton } from 'src/components/shared';
import TrelloBoardContext from 'src/store/TrelloBoardContext';

import styles from './index.module.scss';

export default function CreateCard({
  setIsCreateCardOpen,
  columnId,
}: {
  setIsCreateCardOpen: (value: boolean) => void;
  columnId: number;
}) {
  const [newCardLabel, setNewCardLabel] = useState('');
  const { columns, setColumns } = useContext(TrelloBoardContext);

  const handleCardSubmit = () => {
    setColumns(
      columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            cards: [
              ...column.cards,
              {
                id: Date.now(),
                label: newCardLabel,
              },
            ],
          };
        }
        return column;
      })
    );
    setIsCreateCardOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <span>Card Label:</span>
      <input value={newCardLabel} onChange={(e) => setNewCardLabel(e.target.value)} />
      <TrButton disabled={!newCardLabel.length} onClick={handleCardSubmit}>
        Add Card
      </TrButton>
      <TrButton additionalClassName={styles.closeButton} onClick={() => setIsCreateCardOpen(false)}>
        X
      </TrButton>
    </div>
  );
}
