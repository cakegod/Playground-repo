import React, { useState } from 'react';
const BASESTYLE =
	'transition-colors m-4 rounded-xl px-3 py-3 text-sm font-semibold duration-300 flex grow-0';
const COLORS = {
	default:
		'text-gray-500 hover:bg-gray-200 bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:bg-gray-800',
	red: 'text-red-500 hover:bg-red-200 bg-red-100 dark:text-red-300 dark:hover:bg-red-800 dark:bg-red-900',
	green:
		'text-green-500 hover:bg-green-200 bg-green-100 dark:text-green-300 dark:hover:bg-green-800 dark:bg-green-900',
	purple:
		'text-purple-500 hover:bg-purple-200 bg-purple-100 dark:text-purple-300 dark:hover:bg-purple-800 dark:bg-purple-900',
	rose: 'text-rose-500 hover:bg-rose-200 bg-rose-100 dark:text-rose-300 dark:hover:bg-rose-800 dark:bg-rose-900',
	amber:
		'text-amber-500 hover:bg-amber-200 bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-800 dark:bg-amber-900',
	sky: 'text-sky-500 hover:bg-sky-200 bg-sky-100 dark:text-sky-300 dark:hover:bg-sky-800 dark:bg-sky-900',
};

type ColorType = keyof typeof COLORS;

interface Props {
	color?: ColorType;
	children: React.ReactNode;
	handleToggle?: () => void;
	extraStyles?: string;
}
function Button({ children, color, handleToggle, extraStyles }: Props) {
	const style = [
		BASESTYLE,
		color ? COLORS[color] : COLORS.default,
		extraStyles,
	].join(' ');

	return (
		<button onClick={handleToggle} type='button' className={style}>
			{children}
		</button>
	);
}

export default Button;
