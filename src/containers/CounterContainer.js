import Counter from "../components/Counter"
import {incrementSum, decrementSum,resetSum} from "../actions"
import {connect} from "react-redux"

const mapDispatchToProps = (dispatch) => ({
    incrementSum: () => {dispatch(incrementSum())},
    decrementSum: () => {dispatch(decrementSum())},
    resetSum: (decrement) => {dispatch(resetSum(decrement))}
})

const CounterContainer = connect(null , mapDispatchToProps)(Counter);

export default CounterContainer;