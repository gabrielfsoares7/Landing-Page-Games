import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Page1 from './pages/Page1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/game/:id" element={<Page1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
