import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

// Photo.propTypes = {
    
// };

function Photo(props) {

    const match = useRouteMatch();
    console.log({ match });

    return (
        <Switch>
            <Route></Route>
        </Switch>
    );
}

export default Photo;