import { useEffect, useState } from "react";

export function useKeyboardAware() {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(
    window.visualViewport?.height ?? window.innerHeight
  );

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const onResize = () => {
      const vvHeight = vv.height;
      const windowHeight = window.innerHeight;
      const kbHeight = Math.max(0, windowHeight - vvHeight - (vv.offsetTop ?? 0));
      setKeyboardHeight(kbHeight);
      setViewportHeight(vvHeight);
    };

    vv.addEventListener("resize", onResize);
    vv.addEventListener("scroll", onResize);

    return () => {
      vv.removeEventListener("resize", onResize);
      vv.removeEventListener("scroll", onResize);
    };
  }, []);

  return { keyboardHeight, viewportHeight, isKeyboardOpen: keyboardHeight > 50 };
}
