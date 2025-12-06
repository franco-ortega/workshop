import Image from 'next/image';

export default function EditIcon({ iconAlt, iconPath }) {
	return (
		<Image
			src={iconPath} // Path to your SVG file
			alt={`${iconAlt} Icon`}
			width={15} // Specify the width
			height={15} // Specify the height
		/>
	);
}
