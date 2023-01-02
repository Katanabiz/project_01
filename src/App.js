import './App.css';
import {  Brand, Navbar ,Calltoaction} from './components';
import { Possibility, WhatGPT1, Features, Header, Bolg, Footer } from './containers';


function App() {
  return (
    <div className="App">
      <div calssName='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT1 />
      <Features />
      <Possibility />
      <Calltoaction />
      <Bolg />
      <Footer />

    </div>
  );
}

export default App;
