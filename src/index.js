import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';

import '../style.scss';
import App from './App.jsx';

library.add(fab, faCopy, faCheck);

ReactDOM.render(<App />, document.getElementById('root'));
