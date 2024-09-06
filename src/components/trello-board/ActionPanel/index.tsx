import { useState } from 'react';

import { TrButton } from 'components/shared';
import CreateColumn from '../CreateColumn';

import styles from './index.module.scss';

export default function ActionPanel() {
  const [isColumnFormOpen, setIsColumnFormOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <TrButton disabled={isColumnFormOpen} onClick={() => setIsColumnFormOpen(true)}>
        Create new List
      </TrButton>
      {isColumnFormOpen && <CreateColumn setIsColumnFormOpen={setIsColumnFormOpen} />}
    </div>
  );
}
