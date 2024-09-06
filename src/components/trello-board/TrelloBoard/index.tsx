import { useState } from 'react';

import TrelloBoardContext from 'src/store/TrelloBoardContext';
import { ColumnInterface } from 'src/interfaces';
import ActionPanel from '../ActionPanel';
import ColumnsList from '../ColumnsList';

import styles from './index.module.scss';

export default function TrelloBoard() {
  const [columns, setColumns] = useState<ColumnInterface[]>([]);

  return (
    <TrelloBoardContext.Provider value={{ columns, setColumns }}>
      <div className={styles.wrapper}>
        <ActionPanel />
        <ColumnsList />
      </div>
    </TrelloBoardContext.Provider>
  );
}
