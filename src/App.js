import React from "react";
import "./App.css";
import Feed from "./components/Feed/Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    // Bem
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feed />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
