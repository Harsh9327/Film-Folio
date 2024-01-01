import { Allroutes } from './routes/Allroutes';
import { Header, Footer } from "./components";
// import {ScrollToTop} from "./components/ScrollToTop";

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='dark:bg-slate-800'>
      <Header />
      {/* <ScrollToTop/> */}
      <Allroutes />
      <Footer />
      </div>
    </div>
  );
}

export default App;
