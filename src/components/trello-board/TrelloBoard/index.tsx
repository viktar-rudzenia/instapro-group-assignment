import ActionPanel from '../ActionPanel';
import ColumnsList from '../ColumnsList';

import styles from './index.module.scss';

export default function TrelloBoard() {
  return (
    <div className={styles.wrapper}>
      <ActionPanel />
      <ColumnsList />
    </div>
  );
}
