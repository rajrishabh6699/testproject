import { Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import JobDetailsPage from './pages/JobDetailsPage';
import Candidate from './components/Candidate';
import Modal from './components/Modal';
import Homepage from './pages/HomaPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/jobs">
          <JobDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
