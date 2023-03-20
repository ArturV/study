import type { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p aria-label="current year">{currentYear}</p>
    </footer>
  );
};
