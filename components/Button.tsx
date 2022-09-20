import React from 'react';
const BASESTYLE =
	'transition-colors m-4 rounded-xl px-3 py-3 text-sm font-semibold duration-300';
const COLORS = {
	default: 'text-gray-500 hover:bg-gray-300 bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:bg-gray-900',
	red: 'text-red-500 hover:bg-red-300 bg-red-100 dark:text-red-300 dark:hover:bg-red-700 dark:bg-red-900',
	green: 'text-green-500 hover:bg-green-300 bg-green-100 dark:text-green-300 dark:hover:bg-green-700 dark:bg-green-900',
	purple: 'text-purple-500 hover:bg-purple-300 bg-purple-100 dark:text-purple-300 dark:hover:bg-purple-700 dark:bg-purple-900',
};

type ColorType = keyof typeof COLORS;

interface Props {
	color?: ColorType;
	children: React.ReactNode;
}
function Button({ children, color }: Props) {
	const style = [BASESTYLE, color ? COLORS[color] : COLORS.default].join(' ');

	return (
		<button type='button' className={style}>
			{children}
		</button>
	);
}

export default Button;
