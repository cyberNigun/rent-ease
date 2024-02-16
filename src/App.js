import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { useHistory } from 'react-router-dom';

import AgentDashboard from './components/AgentDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <AgentDashboard />
      </div>
    </Router>
  );
}

export default App;
