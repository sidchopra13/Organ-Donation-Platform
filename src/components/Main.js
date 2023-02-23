import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Hospital from './HospitalRegister';
import Homepage from './Homepage';
import Login from './Login';
import DonorRegister from './DonorRegister';
import RecipientRegister from './RecipientRegister';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route exact path='/hospitalRegister' component={Hospital}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/donorregister' component={DonorRegister}/>
            <Route exact path='/recipientregister' component={RecipientRegister}/>
        </Switch>
    </main>
)

export default Main;