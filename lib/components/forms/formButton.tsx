import { ReactNode } from "react";

export default function FormButton({
  children,
  onClick,
  style = "fill",
  color = "blue",
}: {
  children: ReactNode;
  onClick: () => {};
  style?: "fill" | "outline";
  color?: "blue" | "red" | "black" | "white";
}) {
  let colorSet = { main: "secondary", text: "base-100", hover: "primary" };
  if (color === "red")
    colorSet = { main: "primary", text: "base-100", hover: "secondary" };
  let fill = `bg-${colorSet.main} text-${colorSet.text} hover:bg-${colorSet.hover}`;
  let outline = `bg-transparent text-${colorSet.main} hover:bg-${colorSet.main} hover:text-${colorSet.text}`;

  return (
    <button
      className={`w-full px-6 py-2 flex items-center justify-center transition-colors duration-300 transform rounded-lg ${
        style === "fill" ? fill : outline
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
