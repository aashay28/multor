import './App.css';
import Appointment from './components/Appointment';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import About from './components/About';
import Testimonials from './components/Testimonials';
import VideoFeature from './components/VideoFeature';
import ShowVisitors from './components/ShowVisitors';
import HeaderSection from './components/HeaderSection';

function App() {
  return (
    <>
      <HeaderSection />
      <Appointment />
      <ShowVisitors />
      <VideoFeature />
      <Testimonials />
      <FeatureCard />
      <About />
      <Footer />
    </>
  );
}

export default App;
