import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            {/* Add more routes as needed */}
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;