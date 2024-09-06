import { useContext, useState } from 'react';

import { TrButton } from 'src/components/shared';
import TrelloBoardContext from 'src/store/TrelloBoardContext';
import { CardInterface } from 'src/interfaces';
import CreateCard from '../CreateCard';
import Card from '../Card';

import styles from './index.module.scss';

export default function Column({
  label,
  columnId,
  cards,
}: {
  label: string;
  columnId: number;
  cards: CardInterface[];
}) {
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);
  const { columns, setColumns } = useContext(TrelloBoardContext);

  const handleRemoveColumn = () => {
    setColumns(columns.filter((column) => column.id !== columnId));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.label}>Column: {label}</div>
        <TrButton additionalClassName={styles.settingColumnBtn} onClick={handleRemoveColumn}>
          X
        </TrButton>
      </div>

      {cards.map((card) => (
        <Card key={card.id} card={card} columnId={columnId} />
      ))}

      {cards.length === 0 && <div className={styles.noCards}>No cards have been created yet</div>}

      <TrButton disabled={isCreateCardOpen} onClick={() => setIsCreateCardOpen(true)}>
        Add new card
      </TrButton>
      {isCreateCardOpen && (
        <CreateCard columnId={columnId} setIsCreateCardOpen={setIsCreateCardOpen} />
      )}
    </div>
  );
}
