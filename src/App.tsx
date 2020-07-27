import React from 'react';
import 'antd/dist/antd.css';
import './App.css'
import {Router, Route, Switch} from 'react-router-dom'
import history from "./utils/history";
import {MainContainer} from "./containers/MainContainer";


function App() {
    return (
        <Router history={history}>
            <div>
                <Route path="/" component={MainContainer}/>
                <Route path="/home" component={MainContainer}/>
            </div>
        </Router>
    );
}

export default App;
