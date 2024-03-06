import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContexProvider } from './Context/authContext';
import { Provider } from 'react-redux';
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <AuthContexProvider>
    <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
  // {/* </AuthContexProvider> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
