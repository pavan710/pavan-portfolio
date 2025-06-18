import Navbar from './components/NavBar.js'
import './App.css'
import Banner from './components/Banner.js';
import Skills from './components/Skills.js';
import Project from './components/Project.js';
import Carrer from './components/Carrer.js';
function App() {
  return (
    <div className="App">
     
<Navbar/>
<Banner/>
<Skills/>
<Project/>
<Carrer/>
     
    </div>
  );
}

export default App;
