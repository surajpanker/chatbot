import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<App />, ocument.getElementsByClassName('card-panel teal lighten-2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
//  service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
serviceWorker.register();

