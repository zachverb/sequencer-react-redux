import React from 'react';
import {Route} from 'react-router';

import {App} from 'containers/App';
import {Sequencer} from 'containers/Sequencer';

export default ( 
  <Route path="/" component={App}>
    <Route path="home" component={Sequencer}/>
  </Route>
);
