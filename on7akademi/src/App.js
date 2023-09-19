import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Context from './components/context/Context';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './pages/about';

function App() {
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Context />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

  return (
    <div className="App">
      <Header />
    <RouterProvider router={router} />
    <Sidebar />
    </div>
  );
}

export default App;
