import React from 'react';
// import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
// import ReactDOM from 'react-dom';
import App from './App';
import "./styles/commonStyles.css"
import "./styles/NewMessageForm.css"
import "./styles/ChatPage.css"

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>,
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import App from './App';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );


