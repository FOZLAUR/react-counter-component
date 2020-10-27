import { combineReducers } from "redux"

const size = (state = 0, action) => {
    if (action.type === "UPDATE_COUNTER_SIZE"){
        return action.payload;
    }
    return state;
}

const sum = (state = 0, action) => {
    if (action.type === "INCREMENT"){
        return state + 1;
    }
    else if (action.type === "DECREMENT"){
        return state - 1;
    }
    else if (action.type === "RESET"){
        return state - action.payload;
    }
    return state;
}

export default combineReducers({
    size, sum
})