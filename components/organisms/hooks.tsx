import { useCallback, useState, useEffect } from "react";

export const useDebounce = <T extends (...args: any[]) => void>(
    fn: T,
    delay: number
) => {
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const debouncedFn = useCallback(
        (...args: Parameters<T>) => {
            if (timer) clearTimeout(timer);
            setTimer(setTimeout(() => fn(...args), delay));
        },
        [fn, delay]
    );

    useEffect(() => {
        return () => clearTimeout(timer!);
    }, [timer]);

    return debouncedFn;
};