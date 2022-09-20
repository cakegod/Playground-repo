import React from "react";
const BASESTYLE =
  "transition-colors m-4 rounded-xl px-3 py-3 text-sm font-semibold duration-300";

const COLORS = {
    default: generateColor('gray'),
    red: generateColor('red'),
    green: generateColor('green'),
    purple: generateColor('purple'),
};

function generateColor(color: string) {
  return `
  text-${color}-500 hover:bg-${color}-300 bg-${color}-100 dark:text-${color}-300 dark:hover:bg-${color}-700 dark:bg-${color}-900
  `;
}

type ColorType = keyof typeof COLORS;

interface Props {
  color?: ColorType;
  children: React.ReactNode;
}
function Button({ children, color }: Props) {
  const style = [BASESTYLE, color ? COLORS[color] : COLORS.default].join(" ");

  return (
    <button type="button" className={style}>
      {children}
    </button>
  );
}

export default Button;
