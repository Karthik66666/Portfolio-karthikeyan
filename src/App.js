import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BgVideo } from './components/BgVideo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Certificate } from './components/certification';
import { Skill } from './components/Skill';

function App() {
  return (

<>
{/* <BgVideo/> */}
<BrowserRouter>
<Routes>
<Route path='/' element={<BgVideo/>} />
  <Route path='/Home' element={<Home/>} />
  <Route path='/About' element={<About/>} />
  <Route path='/certification' element={<Certificate/>}/>
  <Route path='/Skill' element={<Skill/>}/>
  <Route path='/Contact' element={<Contact/>} />
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
