import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function MotionCard({ children, className }: Props) {
  return (
    <article className={className}>
      {children}
    </article>
  );
}
