import React from 'react';
import './App.css';
import TodosList from './Components/Todos-app/todos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';

function App() {
  return (
    
    <Provider store={store}>
    <TodosList/>
    </Provider>
  );
}

export default App;
