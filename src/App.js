import { Provider } from 'react-redux';
import { store } from './redux';
import 'bootstrap/scss/bootstrap.scss';
import './styles/main.scss';
import { RootContainer } from './containers';

const App = ({ }) => {
  return (
    <div>
      <Provider store={store}>
        <RootContainer />
      </Provider>
    </div>
  );
};

export default App;
