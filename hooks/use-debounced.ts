import { useState, useEffect } from "react";

export default function useDebounce<T>(value: T, delay?: number ){
   
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500) //updating the value after 500 milliseconds or any specified delay, it tracks the value
        return () => {
            clearTimeout(timer);  //something like resetting the timer
         }
    }, [value, delay]);

    return debouncedValue;
}