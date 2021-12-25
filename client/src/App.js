import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
import logo from './logo.png';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Launches from './Components/Launches';
import Launch from './Components/Launch';

function App() {
  return (
    <Router>
      <div className='container'>
        <img
          src={logo}
          alt='SpaceX'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Routes>
          <Route path='/' element={<Launches />} />
          <Route path='/launch/:flight_number' element={<Launch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
