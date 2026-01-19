import Message from '../Message/Message';
import styles from './Loading.module.css';

export default function Loading() {
	return <Message message={'Retrieving lists...'} />;
}
