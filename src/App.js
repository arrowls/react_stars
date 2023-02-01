import './App.css';
import Stars from "./Stars";

function App() {
  return (
    <div className="App">
      <div className="film-card">
        <div className="film-rating">
          <Stars count={5} />
          <Stars count={6} /> {/* not displayed */}
          <Stars count = {0} /> {/* not displayed */ }
        </div>
      </div>
    </div>
  );
}

export default App;
