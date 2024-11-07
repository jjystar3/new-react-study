import './App.css';
import Calc from './component/Calc';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  return (
    <div>
      <h3>계산기</h3>
      <Provider store={store}>
        <Calc></Calc>
      </Provider>
    </div>
  );
}

export default App;
