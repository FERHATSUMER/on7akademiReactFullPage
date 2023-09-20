import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Context from "./components/context/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Card from "./pages/card/Card";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Context />,
    },
    {
      path: "/dersler",
      element: <Card />,
    },
  ]);

  return (
    <div className="app-container">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <RouterProvider router={router} />
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
