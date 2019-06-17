import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import modules from '~/modules';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '~/sagas';

import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const store = createStore(
    modules,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, logger)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
