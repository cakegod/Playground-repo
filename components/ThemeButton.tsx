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
	const [isToggled, setIsToggled] = useState(false);
	const handleToggle = () => {
		toggleTheme();
		setIsToggled(!isToggled);
	};
	return (
		<Button handleToggle={handleToggle}>
			{isToggled ? toggledIcon : untoggledIcon}
		</Button>
	);
}
