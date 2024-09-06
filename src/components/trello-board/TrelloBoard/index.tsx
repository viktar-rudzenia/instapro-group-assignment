import { useEffect, useState } from 'react';

import { COLUMNS_STORAGE_KEY } from 'src/utils';
import TrelloBoardContext from 'src/store/TrelloBoardContext';
import { ColumnInterface } from 'src/interfaces';
import ActionPanel from '../ActionPanel';
import ColumnsList from '../ColumnsList';

import styles from './index.module.scss';

export default function TrelloBoard() {
  const [columns, setColumns] = useState<ColumnInterface[]>(
    JSON.parse(localStorage.getItem(COLUMNS_STORAGE_KEY) || '[]')
  );

  // update local storage when columns change
  useEffect(() => {
    localStorage.setItem(COLUMNS_STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  return (
    <TrelloBoardContext.Provider value={{ columns, setColumns }}>
      <div className={styles.wrapper}>
        <ActionPanel />
        <ColumnsList />
      </div>
    </TrelloBoardContext.Provider>
  );
}
