"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface BoundingRect {
  top: number;
  left: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
}

const LayoutEffectHook = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [boundingRect, setBoundingRect] = useState<BoundingRect | null>(null);
  useLayoutEffect(() => {
    console.log("use layout effect");
  }, []);

  useEffect(() => {
    console.log("use effect");
  }, []);

  useLayoutEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setBoundingRect({
        top: rect.top,
        left: rect.left,
        bottom: rect.bottom,
        right: rect.right,
        width: rect.width,
        height: rect.height,
      });
    }
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<BoundingRect | null>(null);
  useEffect(() => {
    if (ref.current) {
      const prop = ref.current.getBoundingClientRect();
      console.log("prop -- ", prop);
      setHeight(prop);
    }
  }, []);

  return <div>LayoutEffectHook</div>;
};

export default LayoutEffectHook;
