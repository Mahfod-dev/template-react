import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, About, Contact, NotFound } from '../pages';
import { Layout } from '../components/layout/Layout';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterApp;
