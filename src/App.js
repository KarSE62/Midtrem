
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import Project from './Component/Project';
import Project_lis from './data/Projectdata';
import Project_lis2 from './data/Projectdata2';
import Dataproject from './Component/Dataproject';
import About from './Component/About';
import about from './data/About';
import Data_lis from './data/Aboutdata';
import Dataabout from './Component/Dataabout';
import Location from './Component/Location';
import Footer from './Component/Footer';
import Contact from './Component/Contact';

function App() {
  const Project_lisElement = Project_lis.map((el, index) => {
    return <Dataproject key={index} data={el} />;
  });
  const Project_lisElement2 = Project_lis2.map((el, index) => {
    return <Dataproject key={index} data={el} />;
  });
  const Data_lisElement = Data_lis.map((el, index) => {
    return <Dataabout key={index} data={el} />;
  });
  return (
    <div>
      <Navbar />
      <Header />
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Project />
        <div className="w3-row-padding">
          {Project_lisElement}
          {Project_lisElement2}
        </div>
        <About dabout={about} />
        <div class="w3-row-padding w3-grayscale">
        {Data_lisElement}
        <Contact />
        <Location />

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
