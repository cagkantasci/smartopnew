import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Login from './pages/Login';
import Register from './pages/Register';
import '../i18n';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/reports" exact component={Reports} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;