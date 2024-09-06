import { useContext } from 'react';

import TrelloBoardContext from 'src/store/TrelloBoardContext';

import styles from './index.module.scss';

export default function ColumnsList() {
  const { columns } = useContext(TrelloBoardContext);

  return (
    <div className={styles.wrapper}>
      <div>List of columns:</div>
      <div className={styles.columnsWrapper}>
        {columns.map((column) => (
          <div key={column.id}>{column.label}</div>
        ))}
      </div>
    </div>
  );
}
