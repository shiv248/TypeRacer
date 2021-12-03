import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Matches from '../../Components/Matches/Matches';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="grid">
        <Matches />
        <div className="Home-container">
          <div className="display"></div>
          <input type="text" />
          <h1 className="website-description">Scribe(ing) one word at a time!</h1>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
