import { TrButton } from 'components/shared';

import styles from './index.module.scss';

export default function CreateColumn({
  setIsColumnFormOpen,
}: {
  setIsColumnFormOpen: (value: boolean) => void;
}) {
  return (
    <div className={styles.wrapper}>
      <input />
      <TrButton onClick={() => setIsColumnFormOpen(false)}>Add List</TrButton>
      <TrButton additionalClassName={styles.closeButton} onClick={() => setIsColumnFormOpen(false)}>
        X
      </TrButton>
    </div>
  );
}
