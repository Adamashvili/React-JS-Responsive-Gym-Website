import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Rasons from './components/Reasons/Rasons';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Rasons/>
      <Plans/>
    </div>
  );
}

export default App;
