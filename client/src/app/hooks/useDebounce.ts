import { useState, useEffect } from "react";

export default function useDebounce(value: string, delay: number): string {
  const [valueDebounced, setValueDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValueDebounced(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return valueDebounced;
}
