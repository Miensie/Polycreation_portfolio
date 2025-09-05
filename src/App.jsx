import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Dashboard from '../src/dashboard/Dashboard';
import Projet from '../src/projet/Projet'
import Abonner from '../src/abonner/Abonner';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projet" element={<Projet/>} />
        <Route path="/abonner" element={<Abonner/>} />
      </Routes>
    </HashRouter>
  );
}