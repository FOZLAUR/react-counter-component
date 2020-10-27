export const updateCounterSize = size => {
    return {type: "UPDATE_COUNTER_SIZE", payload: size};
}

export const incrementSum = () => {
    return {type: "INCREMENT"};
}

export const decrementSum = () => {
    return {type: "DECREMENT"};
}

export const resetSum = decrement => {
    return {type: "RESET", payload: decrement};
}