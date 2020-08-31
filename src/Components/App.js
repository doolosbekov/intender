/* Application Cores | React Core */
import React   from 'react';

/* Application Cores | React Router */
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

/* Application Cores | Application Styles */
import './App.css';

/* Application Cores | Application Core Components */
import Header  from './Header/Header';
import Cards   from './Cards/Cards';
import Swipes  from './Swipes/Swipes';
import Chats   from './Chats/Chats';
import Layouts from './Chats/Layouts';

/* Application Declaration */
export default function App() {
     return(
         <div className = "App">
             <Router>
                 {/* Determining Header Component - So It Will Render On Each Route Path */}
                 <Switch>
                     <Route exact path = '/chats/:players'>
                         <Header backButton = '/chats' />
                         <Layouts />
                     </Route>                     
                     <Route exact path = '/chats'>
                         <Header backButton = '/' />
                         <Chats />
                     </Route>
                     {/* Deafult Router Render Path - Should Be Determined At The Bottom Of Switch */}
                     <Route exact path = '/'>
                         <Header/>
                         <Cards />
                         <Swipes/>
                     </Route>
                 </Switch>
             </Router>
         </div>
     );
}