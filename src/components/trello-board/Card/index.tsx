import styles from './index.module.scss';

export default function Card({ label }: { label: string }) {
  return <div className={styles.wrapper}>{label}</div>;
}
