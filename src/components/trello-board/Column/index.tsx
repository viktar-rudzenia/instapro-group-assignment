import { useState } from 'react';

import { TrButton } from 'src/components/shared';
import CreateCard from '../CreateCard';

import styles from './index.module.scss';
import { CardInterface } from 'src/interfaces';

export default function Column({
  label,
  columnId,
  cards,
}: {
  label: string;
  columnId: number;
  cards: CardInterface[];
}) {
  const [iseSettingColumnOpen, setIsSettingColumnOpen] = useState(false);
  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.label}>{label}</div>
        <TrButton
          additionalClassName={styles.settingColumnBtn}
          onClick={() => setIsSettingColumnOpen(true)}
        >
          ...
        </TrButton>
      </div>
      {cards.map((card) => (
        <div>{card.label}</div>
      ))}
      <TrButton disabled={isCreateCardOpen} onClick={() => setIsCreateCardOpen(true)}>
        Add a card
      </TrButton>
      {isCreateCardOpen && (
        <CreateCard columnId={columnId} setIsCreateCardOpen={setIsCreateCardOpen} />
      )}
    </div>
  );
}
