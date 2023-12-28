
import Home from './Home/Home';
import Last from './Last/Last';
import Navbar from './Nvbar/Navbar';
import Phone from './Phone/Phone';
import Talk from './Talk/Talk';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Phone/>
      <Talk/>
      <Last/>
    </div>
  );
}

export default App;
