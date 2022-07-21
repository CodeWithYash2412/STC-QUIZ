import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Pages/Home';
import Turner from './Pages/Turner';

import Fitter from './Pages/Fitter';
import CncVmc from './Pages/CncVmc';
import Copa from './Pages/Copa';
import DiselMechanical from './Pages/DiselMechanical';
import Electrician from './Pages/Electrician';
import ES from './Pages/ES';
import MathsScience from './Pages/MathsScience';
import MRAC from './Pages/MRAC';





function App() {
  

  return (
    <div className="App">
      {/* <Header/> */}
      <Router>
        <Routes>
          <Route path='/nav' element={<Header/>}/>
          <Route path='/' element={<Home/>}/>            
          <Route path='/turner' element={<Turner/>}/>
          
          <Route path='/fitter' element={<Fitter/>}/>
          <Route path='/cncvmc' element={<CncVmc/>}/>
          <Route path='/copa' element={<Copa/>}/>
          <Route path='/diselmechanical' element={<DiselMechanical/>}/>
          <Route path='/electrician' element={<Electrician/>}/>
          <Route path='/es' element={<ES/>}/>
          <Route path='/mathsscience' element={<MathsScience/>}/>
          <Route path='/mrac' element={<MRAC/>}/>
            
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
