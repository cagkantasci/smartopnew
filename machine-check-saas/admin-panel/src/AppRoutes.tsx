
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Manage from "./pages/Manage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Route koruma ve rol kontrolü
const PrivateRoute = ({ children, roles }: { children: JSX.Element, roles?: string[] }) => {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Login />;
  if (roles && !roles.includes(user.role)) return <Dashboard />;
  return children;
};

const AppRoutes: React.FC = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" render={() => <PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/reports" render={() => <PrivateRoute roles={["admin","manager"]}><Reports /></PrivateRoute>} />
        <Route path="/manage" render={() => <PrivateRoute roles={["admin","manager"]}><Manage /></PrivateRoute>} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default AppRoutes;
