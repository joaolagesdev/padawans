import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import { makeStyles } from '@material-ui/core';
import Main from './pages/Main/Main';

const useStyles = makeStyles({
  root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
  }
})

const App: React.FC = () => {
  const classes = useStyles()

  return (

    <div className={classes.root}>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to ="/principal"/>
          </Route>
          <Route path="/principal">
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
