import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './pages/routes';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

