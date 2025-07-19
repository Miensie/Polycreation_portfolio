import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from '../src/dashboard/Dashboard';
import Projet from '../src/projet/Projet'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projet" element={<Projet/>} />
      </Routes>
    </HashRouter>
  );
}