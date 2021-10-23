import Keycloak from 'keycloak-js';
import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';
import Logout from './Logout';

const Secured = () => {
    const keycloak = new Keycloak({
        url: 'http://192.168.64.2:8080/auth',
        realm: 'myrealm',
        clientId: 'myclient',
    });

    const [keycloakState, setKeycloakState] = useState({ keycloak: null, authenticated: false });

    useEffect(() => {
        keycloak.init({ onLoad: 'login-required' })
            .success((authenticated) => {
                setKeycloakState({ keycloak: keycloak, authenticated: authenticated });
            });
    }, []);
    if (keycloakState.keycloak !== null) {
        if (keycloakState.authenticated) {
            return (
                <div>
                    <UserInfo keycloakState={keycloakState} />
                    <Logout keycloakState={keycloakState} />
                </div>
            );
        } else {
            return (
                <div>
                    <p>ログイン失敗orしていない</p>
                </div>
            )
        }
    }
    return (
        <div>
            <p>Initializing Keycloak...</p>
        </div>
    );
}

export default Secured