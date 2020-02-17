import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Badge from '../../components/Badge/Badge';
import TextCounterClass from '../../components/TextCounter/TextCounterClass';
import AlertBanner from '../../components/AlertBanner/AlertBanner';
import Nuevo from '../../components/Nuevo/Nuevo';

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
            <Route path="/nuevo/:id" component={Nuevo} />
        </Switch>
    )
};

export default SwitchComponent;