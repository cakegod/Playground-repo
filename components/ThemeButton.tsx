import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Button from './Button';
interface Props {
	toggledIcon: React.ReactNode;
	untoggledIcon: React.ReactNode;
	toggleTheme: () => void;
}
export default function ThemeToggle({
	toggledIcon,
	untoggledIcon,
	toggleTheme,
}: Props) {
	const { theme } = useTheme();
	const [isToggled, setIsToggled] = useState(theme);
	const handleToggle = () => {
		toggleTheme();
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
