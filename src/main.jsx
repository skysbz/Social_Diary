import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Diary/App.jsx'
import './index.css'
import ContextStore from './Diary/ContextProvider';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContextStore>
		<App />
	</ContextStore>
  </React.StrictMode>,
)
