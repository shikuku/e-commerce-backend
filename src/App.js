import React, { useState } from 'react';
import './App.css';
import Nav from './Nav/Nav';
import Main from './Main/Main';
// import Currency from"./currency/Currency"
import Footer from './Footer/Footer';
function App() {
  const [closedialogue, setClosedialogue] =useState(false)
  return (
    <div>
   <Nav/>
   {/* <Currency /> */}
      {<Main closedialogue={closedialogue} setClosedialogue={setClosedialogue}/>}
     <Footer />
    </div>
  );
}

export default App;
