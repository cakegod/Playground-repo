import React, { useState } from 'react';
import Button from './Button';
interface Props {
	toggled: React.ReactNode;
	untoggled: React.ReactNode;
	toggleTheme: () => void;
}
export default function ThemeToggle({
	toggled,
	untoggled,
	toggleTheme,
}: Props) {
	const [isToggled, setIsToggled] = useState(false);
	const handleToggle = () => {
		toggleTheme();
		setIsToggled(!isToggled);
	};
	return (
		<Button handleToggle={handleToggle}>
			{isToggled ? toggled : untoggled}
		</Button>
	);
}
