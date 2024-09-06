import { useContext, useState } from 'react';

import { TrButton } from 'src/components/shared';
import TrelloBoardContext from 'src/store/TrelloBoardContext';
import { CardInterface } from 'src/interfaces';

import styles from './index.module.scss';

export default function Card({ card, columnId }: { card: CardInterface; columnId: number }) {
  const { id: cardId, label } = card;

  const { columns, setColumns } = useContext(TrelloBoardContext);
  const [isMoveCardOpen, setIsMoveCardOpen] = useState(false);

  const availableColumnsToMoveCard = columns.filter((column) => column.id !== columnId);

  const handleRemoveCard = () => {
    setColumns(
      columns.map((column) => {
        return {
          ...column,
          cards: column.cards.filter((card) => card.id !== cardId),
        };
      })
    );
  };

  const handleMoveCard = (columnIdToMove: number) => {
    const newColumns = columns.map((column) => {
      if (column.id === columnId) {
        return {
          ...column,
          cards: column.cards.filter((card) => card.id !== cardId),
        };
      }
      if (column.id === columnIdToMove) {
        return {
          ...column,
          cards: [...column.cards, card],
        };
      }
      return column;
    });

    setColumns(newColumns);
  };

  return (
    <div className={styles.wrapper}>
      <div>Card label: {label}</div>
      <TrButton
        disabled={!availableColumnsToMoveCard.length || isMoveCardOpen}
        onClick={() => setIsMoveCardOpen(true)}
        additionalClassName={styles.moveCardBtn}
      >
        Move card
      </TrButton>
      {isMoveCardOpen && (
        <div className={styles.moveCardListWrapper}>
          Choose Column where to move card:{' '}
          {availableColumnsToMoveCard.map((columnToMoveCard) => (
            <TrButton onClick={() => handleMoveCard(columnToMoveCard.id)}>
              {columnToMoveCard.label}
            </TrButton>
          ))}
        </div>
      )}
      <TrButton onClick={handleRemoveCard} additionalClassName={styles.removeCardBtn}>
        Remove card
      </TrButton>
    </div>
  );
}
