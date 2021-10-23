import React, { useEffect, useState } from 'react';

const UserInfo = (props) => {

    const keycloakState = props.keycloakState;
    const [user, setUser] = useState();

    useEffect(() => {
        if (keycloakState.keycloak === null) {
            throw Error('keycloak is not initialized.');
        }
        keycloakState.keycloak.loadUserInfo()
            .success((user) => {
                console.log(user);
                setUser({ name: user.name, email: user.email, id: user.sub })
            });
    }, []);

    return (
        <div className="UserInfo">
            <p>Welcome to secure components, {user != null ? user.name : ""}</p>
        </div>
    );
};

export default UserInfo