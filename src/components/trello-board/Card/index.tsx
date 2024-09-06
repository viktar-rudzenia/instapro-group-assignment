import { useState } from 'react';
import { TrButton } from 'src/components/shared';

import styles from './index.module.scss';

export default function Card({ label }: { label: string }) {
  const [isCardSelected, setIsCardSelected] = useState(false);

  return (
    <>
      <TrButton onClick={() => setIsCardSelected(true)} additionalClassName={styles.wrapper}>
        Card label: {label}
      </TrButton>
      {isCardSelected && <div>Move Card to:</div>}
    </>
  );
}
