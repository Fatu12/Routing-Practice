import logo from './logo.svg';
import './App.css';
import Four from './components/Four';
import Home from './components/Home';

import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar';
import ParamsComponent from './components/ParamsComponent';

// const Home = (props) =>{
//     return (
//         <div>
//             <h1 style={{color: "red"}}> Home Component</h1>
//             <Link to={'/about'}> Go to about</Link>


//             </div>
//     )
// }
// // link is exactly work like a tag, but it can give us hard time to refresh our page

// const About  = (props) =>{
//     return (
//         <div>
//             <h1 style={{color: "blue"}}> About Component</h1>
//             <Link to={'/'}> GO to Home </Link>

//         </div>
//     )
// }

function App() {
  return (
    <div className="App">
    
  
    <div>
      <Navbar/>
        <Routes>
            <Route path= "/" element={<Home/>}/>
            {/* <Route path= "/:n" element={<Four />}/> */}
            <Route path= "/:textWord" element={<ParamsComponent />}/>
            <Route path= "/:textWord/:textColor/:bgColor" element={<ParamsComponent/>}/>
        </Routes>
        
    </div>

  

    </div>
  );
}

export default App;
