import { ReactNode } from 'react';
import cn from 'classnames';

import styles from './index.module.scss';

interface RmButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  additionalClassName?: string;
  disabled?: boolean;
}

export default function TrButton({
  children,
  onClick,
  additionalClassName,
  disabled,
}: RmButtonProps) {
  return (
    <button
      type="button"
      className={cn(styles.button, additionalClassName)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
