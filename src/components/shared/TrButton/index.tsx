import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface RmButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  additionalClassName?: string;
}

export default function TrButton({ children, onClick, additionalClassName }: RmButtonProps) {
  return (
    <button type="button" className={cn(styles.button, additionalClassName)} onClick={onClick}>
      {children}
    </button>
  );
}
