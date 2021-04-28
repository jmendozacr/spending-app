import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from "react-helmet";
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import Container from './components/commons/Container';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EditExpenses from './pages/EditExpenses';
import ExpensesByCategory from './pages/ExpensesByCategory';
import ExpensesList from './pages/ExpensesList';
import favicon from './images/logo.png'
import Background from './components/commons/Background';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './components/PrivateRoute';

WebFont.load({
    // Work+Sans:wght@400;500;700
    google: {
        families: ['Work Sans: 400,500,700', 'sans-serif']
    }
});

export const Index = () => {
    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
            </Helmet>
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Container>
                            <Route path="/login" component={Login}/>
                            <Route path="/register" component={Register}/>

                            <PrivateRoute path="/edit/:id">
                                <EditExpenses/>
                            </PrivateRoute>
                            <PrivateRoute path="/categories">
                                <ExpensesByCategory/>
                            </PrivateRoute>
                            <PrivateRoute path="/expenses">
                                <ExpensesList/>
                            </PrivateRoute>
                            <PrivateRoute exact={true} path="/">
                                <App/>
                            </PrivateRoute>
                        </Container>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
            <Background/>
        </>
    );
}

ReactDOM.render(<Index/>,
    document.getElementById('root')
);