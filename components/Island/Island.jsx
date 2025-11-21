import styles from './Island.module.css';

const border1 = '10px';
const border2 = '10px';
const border3 = '10px';
const border4 = '10px';
export default function Island({
	border1,
	border2,
	border3,
	border4,
	width,
	height,
}) {
	return (
		<div
			className={styles.Island}
			style={{
				color: 'white',
				borderRadius: `${border1} ${border2} ${border3} ${border4}
        `,
				width,
				height,
			}}
		>
			Island
		</div>
	);
}
