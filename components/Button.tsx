import tw from "tailwind-styled-components";

interface IProps {
  color: string;
  text: string;
}

interface SButtonProps {
  $primary: string;
}

const generateColor = (color: string) =>
  `text-${color}-500 hover:bg-${color}-300 bg-${color}-100 dark:text-${color}-300 dark:hover:bg-${color}-700 dark:bg-${color}-900 `;

const SButton = tw.button<SButtonProps>`
  ${(p) => generateColor(p.$primary)}
  transition-colors
  m-4
  rounded-xl
  px-3
  py-3
  text-sm
  font-semibold
  duration-300
`;

function Button({ color, text }: IProps) {
  return (
    <>
      <SButton $primary={color}>{text}</SButton>
    </>
  );
}

export default Button;
