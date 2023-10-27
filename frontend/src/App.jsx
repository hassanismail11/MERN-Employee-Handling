import { useEffect, useState } from "react";
import "./App.css";
import { axiosGet } from "./axiosServices";
import MainSection from './components/MainSection/MainSection';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav />
      <MainSection />
    </div>
  );
}

export default App;
