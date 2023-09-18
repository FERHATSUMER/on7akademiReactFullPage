import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Context from './components/context/Context';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar  />
      <Context />
    </div>
  );
}

export default App;
