import type { ReactNode } from "react";

type Props = {
  href?: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

export function MotionLink({ children, className, href, target, rel, onClick }: Props) {
  return (
    <a href={href} className={className} target={target} rel={rel} onClick={onClick}>
      {children}
    </a>
  );
}
