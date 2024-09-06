import { TrButton } from 'components/shared';

import styles from './index.module.scss';

export default function TrelloBoard() {
  return (
    <div className={styles.wrapper}>
      <div>Trello Board</div>
      <TrButton>Shared button</TrButton>
    </div>
  );
}
