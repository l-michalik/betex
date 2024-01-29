import logo from './logo.svg';
import './App.css';

function App() {
  const handleClick = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    fun();
  }

  const fun = () => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
    }, 5000);
  }
  return (
    <button onClick={handleClick}>run action</button>
  );
}

export default App;
