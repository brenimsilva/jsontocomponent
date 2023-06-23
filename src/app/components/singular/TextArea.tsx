"use client";
import React, { useEffect, useRef, useState } from "react";

export default function TextArea() {
  const [expression, setExpression] = useState<string>();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(expression);
    if (expression) console.log(new RegExp('^"[aA-zZ]+"$').test(expression));
  }, [expression]);

  //   console.log(isValid);
  return (
    <div>
      <textarea
        onChange={(e) => {
          setExpression(e.target.value);
        }}
      ></textarea>
      <div className="bg-cyan-200" contentEditable="true" ref={divRef}>
        {expression}
      </div>
    </div>
  );
}
