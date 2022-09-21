import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Button from './Button';
interface Props {
	toggledIcon: React.ReactNode;
	untoggledIcon: React.ReactNode;
}
export default function ThemeToggle({ toggledIcon, untoggledIcon }: Props) {
	const { theme, setTheme } = useTheme();
	const [isToggled, setIsToggled] = useState(theme);
	const handleToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
		setIsToggled(isToggled === 'light' ? 'dark' : 'light');
	};
	return (
		<Button
			handleToggle={handleToggle}
			color={isToggled === 'light' ? 'amber' : 'sky'}
			extraStyles={`shadow-lg ${
				isToggled === 'light' ? 'shadow-amber-500/40' : 'shadow-sky-500/40'
			}`}>
			{isToggled === 'light' ? untoggledIcon : toggledIcon}
		</Button>
	);
}
