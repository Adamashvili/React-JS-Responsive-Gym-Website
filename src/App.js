import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Rasons from './components/Reasons/Rasons';
import Testimonials from './components/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Rasons/>
      <Plans/>
      <Testimonials/>
    </div>
  );
}

export default App;
