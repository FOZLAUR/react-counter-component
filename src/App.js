import './App.css';
import Counter from './component/Counter';
import CounterGroup from './component/CounterGroup';

function App() {
  const size = 3;
  return (
    <div className="App">
      <header className="App-header">
        <CounterGroup size={size}  />
      </header>
    </div>
  );
}

export default App;
