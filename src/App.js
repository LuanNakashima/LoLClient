import Provider from './Context/Provider';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
