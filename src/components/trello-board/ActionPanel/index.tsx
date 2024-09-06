import { TrButton } from 'components/shared';
import styles from './index.module.scss';

export default function ActionPanel() {
  return (
    <div className={styles.wrapper}>
      <TrButton>Create label</TrButton>
      <TrButton>Create Card</TrButton>
    </div>
  );
}
