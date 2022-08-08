import { all } from 'redux-saga';
import { moviesSagas } from './movieSagas ';
export default function* rootsaga() {
  yield all([...moviesSagas]);
}
