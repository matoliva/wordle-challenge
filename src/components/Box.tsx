import styles from './Box.module.css';

interface Props {
  letter: string;
}

export const Box = ({letter}: Props) => {
  return (<div className={styles.box}>{letter}</div>);
};
