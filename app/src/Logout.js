

import React from 'react';
// import { RouteComponentProps, withRouter } from "react-router-dom";



const Logout = (props) => {

    const keycloakState = props.keycloakState;

    function logout() {
        // props.history.push('/')
        if (keycloakState.keycloak != null) {
            keycloakState.keycloak.logout();
        }
    }

    return (
        <div className="Logout">
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
};

export default Logout;