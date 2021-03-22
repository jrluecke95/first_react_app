import './App.css';
import Greeter from './components/Greeter';

const names = [
  'Terry',
  'Sharon',
  'Fred',
  'Liam',
  'Becky'
]

function App() {
  return (
    <div className="App">
      <h1 className='greeting'>Hello React!</h1>
      <Greeter />
      <Greeter name="Jake" />
      <Greeter name="Bob" />
      <Greeter name="Steve" />
      <Greeter name="Sharon" />
    </div>
  );
}

export default App;
