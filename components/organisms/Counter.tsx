import React, { useState, useCallback, useMemo } from "react";
import CounterContext from "./CounterContext";
import { useDebounce } from "./hooks";
import ButtonText from '../molecules/ButtonText';

interface CounterProps {
    initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 0 }) => {
    const [index, setIndex] = useState(initialValue);

    const debouncedIncrement = useDebounce(() => setIndex(index + 1), 500);
    const debouncedDecrement = useDebounce(() => setIndex(index - 1), 500);

    const contextValue = useMemo(
        () => ({
            index,
            increment: debouncedIncrement,
            decrement: debouncedDecrement,
        }),
        [index, debouncedIncrement, debouncedDecrement]
    );

    return (
        <CounterContext.Provider value={contextValue}>
            <CounterView />
        </CounterContext.Provider>
    );
};

const CounterView: React.FC = () => {
    const { index, increment, decrement } = React.useContext(CounterContext);

    return (
        <>
            <p>{index}</p>
            <ButtonText text="increment" onClick={increment} />
            <ButtonText text="decrement" onClick={decrement} />
        </>
    );
};

export { Counter };