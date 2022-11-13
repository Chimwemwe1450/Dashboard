
import './App.css';
import Navbar from './Component/Bootstrap_Components/Navbar';
import Settings from './Component/Bootstrap_Components/settings';
import Offset from './Component/Bootstrap_Components/OffCanvas';

import Table1 from './Component/Bootstrap_Components/Table1';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      
<Switch>
<Route exact path = '/'>
<Offset/>
</Route>
<Route path = '/settings'>
  <Settings/>
</Route>
<Route path = '/table'>
  <Table1/>
</Route>
</Switch>
  

    </div>
    </Router>
  );
}

export default App;
