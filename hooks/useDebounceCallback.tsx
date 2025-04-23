import { useEffect, useRef } from "react";

export function useDebounceCallback<T>(
  value: T,
  delay: number,
  callback: (val: T) => void
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = setTimeout(() => {
      callbackRef.current(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
