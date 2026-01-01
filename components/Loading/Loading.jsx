import styles from './Loading.module.css';

export default function Loading({ message }) {
	return <div className={styles.Loading}>{message}</div>;
}
