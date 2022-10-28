import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Button from './Button';
interface Props {
	toggledIcon: React.ReactNode;
	untoggledIcon: React.ReactNode;
}
export default function ThemeToggle({ toggledIcon, untoggledIcon }: Props) {
	const { theme, setTheme } = useTheme();
	const [isToggled, setIsToggled] = useState(localStorage.theme || 'light');
	const handleToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
		setIsToggled(isToggled === 'light' ? 'dark' : 'light');
	};
	return (
		<Button
			handleToggle={handleToggle}
			color={isToggled === 'light' ? 'amber' : 'sky'}
			shadow={isToggled === 'light' ? 'sun' : 'moon'}>
			{isToggled === 'light' ? untoggledIcon : toggledIcon}
		</Button>
	);
}
