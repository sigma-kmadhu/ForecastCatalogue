import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForecastList from './components/ForecastList'

function App() {
  return (
    <div className="App">
      {/* Render ForecastList from catalogue in constans */}
      <ForecastList />
    </div>
  );
}

export default App;
