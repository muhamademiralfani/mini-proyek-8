// index.js
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import { store, persistor } from './redux/index.js'; // Import both store and persistor
import './index.css';
import App from './App.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {' '}
      {/* Wrap your App with PersistGate */}
      <App />
    </PersistGate>
  </Provider>
);
