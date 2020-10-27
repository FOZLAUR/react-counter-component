import CounterGroup from "../components/CounterGroup"
import {connect} from "react-redux"

const mapStateToProps = state => ({
    number: state.size,
})

const CounterGroupContainer = connect(mapStateToProps)(CounterGroup)

export default CounterGroupContainer;