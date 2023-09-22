import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue != null) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error("Error parsing stored value from localStorage:", error);
      }
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
