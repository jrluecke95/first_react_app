import './App.css';
import Greeter from './components/Greeter';
import Timestamp from './components/Timestamp';

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
      {
        names.map((name, i) => {
          return <Greeter name={name} key={i}/>
        })
      }
      <Timestamp />
    </div>
  );
}

export default App;
