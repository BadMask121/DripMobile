import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import Reducer from '../reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
});

export default createStore(Reducer, applyMiddleware(thunk, logger));
