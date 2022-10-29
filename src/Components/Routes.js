import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Confirmation from '../pages/Confirmation'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={Confirmation} />
    </BrowserRouter>
);

export default Routes