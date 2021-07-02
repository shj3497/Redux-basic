import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom'
import Home from '../routes/home';
import Detail from '../routes/detail';

const App = (props) => {

  return(
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App