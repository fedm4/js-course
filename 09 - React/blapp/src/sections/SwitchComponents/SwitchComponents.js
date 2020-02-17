import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Badge from '../../components/Badge/Badge';
import TextCounterClass from '../../components/TextCounter/TextCounterClass';
import AlertBanner from '../../components/AlertBanner/AlertBanner';


const SwitchComponent = () => {
    return (
        <Switch>
            <Route exact path="/" component={TextCounterClass} />
            <Route path="/badge">
                <Badge>My Badge Route</Badge>
            </Route>
            <Route path="/alert">
                <AlertBanner tipoMensaje="success" />
            </Route>
        </Switch>
    )
};

export default SwitchComponent;