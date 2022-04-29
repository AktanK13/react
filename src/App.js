import './App.css';
import { Button } from './components/Buttons/Button';

function App() {
  return (
    <div className="App">
      Hello World!!

      <div>
        <Button name={'first'}>
          <span>button 1</span>
        </Button>
        <Button name={'second'}></Button>
        <Button name={'third'}></Button>
      </div>
    </div>
  );
}

export default App;
