import React from "react";

interface CounterContextProps {
    index: number;
    increment: () => void;
    decrement: () => void;
}

const CounterContext = React.createContext<CounterContextProps>({
    index: 0,
    increment: () => { },
    decrement: () => { },
});

export default CounterContext;