import './App.css';
import CounterGroup from './component/CounterGroup';
import MultiCounter from './component/MultiCounter';

function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
        {/* <CounterGroup size={size}  /> */}
        <MultiCounter />
      </header>
    </div>
  );
}

export default App;
