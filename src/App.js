import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import SliderIcons from './Components/SliderIcons/SliderIcons';
import AdsPoster from './Components/AdsPoster/AdsPoster';
import Rowposter from './Components/Rowposter/Rowposter';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <SliderIcons/>
      <AdsPoster/>
      <Rowposter title='Commercial Shop'/>
      <Rowposter title='Commercial Office'/>
      <Rowposter title='Commercial Land'/>
      <Rowposter title='Commercial Building'/>
      <Rowposter title='Industrial Building'/>
      <Rowposter title='Industrial Land'/>
      <Rowposter title='Co-working Space'/>
      <Rowposter title='Private Office'/>
      <Rowposter title='Meeting Room'/>
      <Footer/>
    </div>
  );
}

export default App;
