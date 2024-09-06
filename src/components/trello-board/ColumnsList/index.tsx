import { useContext } from 'react';

import TrelloBoardContext from 'src/store/TrelloBoardContext';
import Column from '../Column';

import styles from './index.module.scss';

export default function ColumnsList() {
  const { columns } = useContext(TrelloBoardContext);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.columnsHeader}>Columns:</h2>
      <div className={styles.columnsWrapper}>
        {columns.map((column) => (
          <Column key={column.id} label={column.label} columnId={column.id} cards={column.cards} />
        ))}

        {columns.length === 0 && (
          <div className={styles.noColumns}>Columns have not been created yet</div>
        )}
      </div>
    </div>
  );
}
