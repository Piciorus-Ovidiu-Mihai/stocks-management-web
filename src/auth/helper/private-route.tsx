import { Route, Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} element={props => (
        localStorage.getItem('user')
            ? <Component {...props} />
            : <Navigate replace to={{ pathname: '/auth/login' }} />
    )} />
)