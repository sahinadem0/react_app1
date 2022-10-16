import './App.css';
import Anasayfa from './Components/Anasayfa.tsx'
import Hakkimizda from './Components/Hakkimizda.tsx'
import Urunler from './Components/Urunler.tsx'
import Iletisim from './Components/Iletisim.tsx'
import Navbar from './Components/navbar.tsx'
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Anasayfa />
      <Hakkimizda />
      <Urunler />
      <Iletisim />
    </div>
  );
}

export default App;
