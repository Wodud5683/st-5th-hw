import { Provider } from 'react-redux';
import TextInput from './components/TextInput';
import TextList from './components/TextList';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList />
      </div>
    </Provider>
  );
}

export default App;
