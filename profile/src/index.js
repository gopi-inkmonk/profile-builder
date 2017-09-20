import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './stylesheets/profile.css';
import AppRoutes from './AppRoutes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRoutes />, document.getElementById('root'));
registerServiceWorker();
