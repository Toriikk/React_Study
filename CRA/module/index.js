//여기가 루트 리듀서가 된다.
// combineReducers를 사용해서 모듈 디렉토리에 만든 여러 리덕스 모듈들을 합친다.

import { combineReducers } from 'redux';
import counter from '../counter';
import todos from '../todos';
import {legacy_createStore as createStore } from 'redux';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
  counter,
  todos
});

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

export default rootReducer;