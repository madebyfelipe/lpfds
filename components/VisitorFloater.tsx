"use client";

import { useState, useEffect } from "react";

export function VisitorFloater() {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setCount(Math.floor(Math.random() * 91) + 20);
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (count === null) return null;

  return (
    <div className={`visitor-floater${visible ? " visitor-floater--visible" : ""}`}>
      <span className="visitor-floater__dot" />
      <span><strong>{count}</strong> pessoas nesta página agora</span>
    </div>
  );
}
