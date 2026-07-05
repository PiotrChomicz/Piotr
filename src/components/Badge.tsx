import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

// Prosty primitive pigułki. Kształt jest stały, kolor/padding/rozmiar podaje
// wywołujący przez className, żeby ten sam Badge pasował do każdego modułu.
export function Badge({ children, className = "" }: Props) {
  return (
    <span className={`inline-flex items-center rounded-full ${className}`}>
      {children}
    </span>
  );
}
