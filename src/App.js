import { Switch ,Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import LoginPage from './components/LoginPage';
import JobCard from './components/JobCard';
import DetailsPage from './components/DetailsPage';
import Candidate from './components/Candidate';
import Modal from './components/Modal';

function App() {
  return (
    <div>
      
      <Switch>
        <Route exact path='/'>
          <Homepage/>
        </Route>
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/details'>
          <DetailsPage/>
        </Route>
      </Switch>
      
     
    </div>
  );
}

export default App;
