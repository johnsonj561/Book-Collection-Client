import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import Main from './Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((<Main />), document.getElementById('root'));

serviceWorker.unregister();
