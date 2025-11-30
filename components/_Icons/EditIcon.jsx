import Image from 'next/image';

export default function EditIcon() {
	return (
		<Image
			src='/icons/edit-icon-feather.svg' // Path to your SVG file
			alt='Edit Icon'
			width={15} // Specify the width
			height={15} // Specify the height
			style={{ display: 'inline-block' }}
		/>
	);
}
