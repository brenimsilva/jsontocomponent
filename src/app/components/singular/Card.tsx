import React from "react";

interface props {
  children: React.ReactNode;
}

export default function Card({ children }: props) {
  return <div className="shadow ">{children}</div>;
}
