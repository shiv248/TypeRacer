import './AboutUs.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';

function AboutUs() {
  return (
    <div className="AboutUs">
      <Navbar />
      <div className="grid">
        <Matches />
        <div className="AboutUs-container">
          <div className="display"></div>
        </div>
      </div>
      
    </div>
  );
}

export default AboutUs;
