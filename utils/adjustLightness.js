import { lightValue } from './lightValue';

const adjustLightness = (color, adjustment) => {
	const adjustedLightValue = lightValue(color) + adjustment;
	const before = color.slice(0, color.indexOf('%') + 3);

	// reconstruct the color string with the adjusted lightness value
	return `${before}${adjustedLightValue}%)`;
};

export default adjustLightness;
