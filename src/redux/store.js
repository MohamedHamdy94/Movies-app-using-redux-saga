
import { configureStore } from '@reduxjs /toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import MovieReducer from './movieSlice';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { movie: MovieReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
