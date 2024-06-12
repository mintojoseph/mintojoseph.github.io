import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/Home.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
  );
};

export default MyRoutes;