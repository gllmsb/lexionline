import './App.css'
import { MainLayout } from './layouts/MainLayout'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<div>Oops! Page not found. Please try again later.</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
