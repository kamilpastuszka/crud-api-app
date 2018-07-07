import React from 'react';
import MainView from '../containers/MainView';
import AddView from '../containers/AddView';
import NotFound from '../components/NotFound';
import EditView from '../containers/EditView';
import SingleView from '../containers/SingleView';

import { BrowserRouter, Switch, Route } from 'react-router-dom';


 const Routes = () => (
    <BrowserRouter> 
        <div className="container">
        <Switch>
            <Route path='/' component={MainView} exact={true}/>
        	<Route path='/cakes/add' component={AddView} />
            <Route path='/edit/:id' component={EditView} />
            <Route path='/:id' component={SingleView} />
            <Route component={NotFound} />
        </Switch>
        </div>
     </BrowserRouter>
);

export default Routes;

//changes to SigleItem  View, 
//List View