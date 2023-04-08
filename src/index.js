import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './authHandler.css';
import './index.css';
import './global.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calendar from './components/Calendar/calendar'
import Comment from './components/Calendar/Comment'
import Admin from './pages/Flow/Admin'
import TeacherView from './pages/Flow/TeacherFlow/TeacherView'
import ParentView from './pages/Flow/ParentFlow/ParentView';
import ChildGrades from './pages/Flow/ParentFlow/ChildGrades';
import { UserView } from './pages/Flow/Admin/UserView';
import Authenticator from './components/Authenticator';
// this is subject to change, it needs to be dynamic
import ChildInfo from './pages/Flow/TeacherFlow/ChildInfo';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        {/* <App /> */}

        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/admin' element={<UserView />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/calendar/:comments' element={<Comment />} />

          <Route path='authenticator' element={<Authenticator />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/teacher' element={<TeacherView />} />
          <Route path='/teacher/:parentId/:selected' element={<ChildInfo />} />

          <Route path='parent/:id' element={<ParentView />} />
          <Route path='parent/:id/:studentId' element={<ChildGrades />} />




        </Routes>

      </Auth0Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);